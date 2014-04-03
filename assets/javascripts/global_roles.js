// Case-insensitive search for jQuery >= 1.8
// jQuery.expr[":"].Contains = jQuery.expr.createPseudo(function(arg) {
//     return function( elem ) {
//         return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
//     };
// });

// Case-insensitive search for jQuery < 1.8
$.expr[':'].Contains = function(elem, index, match) {
  return jQuery(elem).text().toUpperCase().indexOf(match[3].toUpperCase()) >= 0;
};
// Namespace declaration
var RMPlus = (function (my) {
  return my;
}(RMPlus || {}));

// Useful utility functions
RMPlus.Utils = (function(my) {
  var my = my || {};

  my.debounce = function(delay, fn){
    var timer = null;
    return function(){
      var context = this, args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function() {
        fn.apply(context, args);
      }, delay);
    };
  }

  my.throttle = function(threshhold, fn, scope){
    threshhold || (threshhold = 250);
    var last, deferTimer;
    return function() {
      var context = scope || this;
      var now = +new Date, args = arguments;
      if (last && now < last + threshhold){
        clearTimeout(deferTimer);
        deferTimer = setTimeout(function() {
          last = now;
          fn.apply(context, args);
        }, threshhold);
      } else {
        last = now;
        fn.apply(context, args);
      }
    };
  }

  return my;
})(RMPlus.Utils || {});

// Module for global roles plugin
RMPlus.GlobalRoles = (function(my){
  var my = my || {};

  // variable to hold jQuery object of the form for editing projects by user
  my.$projectsForm = {};

  my.fetchData = function(){
    var name = this.getAttribute('data-name');
    if (this.getAttribute('data-loaded') === 'false'){
        var container = $('#tab-content-' + name);
        container.addClass('glr-preloader');
        var url = this.getAttribute('data-url');
        $.get(url, $.proxy(function(data, statusTxt, xhr){
          container.html(data);
          container.removeClass('glr-preloader');
          this.setAttribute('data-loaded', 'true');
        }, this))
        .fail(function(xhr, textStatus){
          if (xhr.status != undefined && xhr.status.toString( ) == "0") { return; }
          container.html('<div class="glr-ajax_error"></div><div class="glr-ajax_error_text">' + xhr.status + ": " + xhr.statusText + '<div>');
          container.removeClass('glr-preloader');
        });
      }
      showTab(name, this.href);
      this.blur();
  }

  return my;
})(RMPlus.GlobalRoles || {});

function projectsFormShow(member_id){
  $('#member-'+member_id+'-project-link').hide();
  var $member = $('#member-'+member_id);
  var project_ids = $member.attr('data-project-ids');

  // trim [] from the string
  project_ids = project_ids.substring(1, project_ids.length-1).split(', ');
  // concatenate into jQuery selector to check projects already present
  project_ids_selector = project_ids.map(function(id){ return '#' + id;}).join(', ');

  if ($member.find('input').length == 0){
    RMPlus.GlobalRoles.$projectsForm.clone().appendTo($member);
  }
  else {
    $('#member-'+member_id+' form').show();
  }

  $member.find('input').prop('checked', false);
  $member.find(project_ids_selector).prop('checked', true);

  var principal_id = $('#member-'+member_id).attr('data-principal-id');

  $member.find('#edit_user_projects_by_role_principal_id').val("");
  $member.find('#edit_user_projects_by_role_principal_id').val(principal_id);
  $member.find('#projects-form-cancel').attr('data-member-id', member_id);
}

function projectsFormCancel(member_id){
  $('#member-'+member_id+'-project-link').show();
  $('#member-'+member_id+' form').hide();
}



$(document).ready(function(){

  var t = $('#roles_tabs');
  $('#roles_tabs').remove();
  $('div#content h2').after(t);
  $('#roles_tabs').removeClass('I');

  var edit_partial = $('form.edit_role')[0].outerHTML;
  $('form.edit_role').remove();
  $('div#tab-content-roles_edit').html(edit_partial);

  // override redmine onclick handlers with jQuery event handlers
  var regexp = new RegExp("^[^-]*-");
  $('div.tabs a').each(function(){
    var old_onclick = this.onclick;
    $(this).removeAttr('onclick');
    this.setAttribute('data-name', this.id.replace(regexp, ''));
    $(this).on("click", function(event){
      RMPlus.GlobalRoles.fetchData.apply(this);
      event.preventDefault();
    });
  });
  var selected_tab = $('div.tabs a.selected').get(0);
  RMPlus.GlobalRoles.fetchData.apply(selected_tab);


  function FetchUsers(){
    $.ajax({url: $('#filter_users').attr('data-url'),
            type: 'get',
            data: {project_id: $('#project_id').val(), user_name: $('#filter_users').val().trim()},
            success: function(data){},
            beforeSend: function(){ $this.addClass('ajax-loading'); },
            complete: function(){ $this.removeClass('ajax-loading'); }
          });
  }

  $('body').on("click", function (event){
    if (event.target.id === "projects-form-cancel"){
      var member_id = event.target.getAttribute('data-member-id');
      $('#member-'+member_id+'-project-link').show();
      $('#member-'+member_id+' form').hide();
    }
  });

  $('body').on('change', '#project_id', function(){
    $this = $(this);
    var $submit_button = $('#add_user_to_role');
    var value = $this.val();
    var old_value = $this.attr('data-value-was');
    if (value === '') {
      $submit_button.attr('disabled', 'disabled');
      $('.glr-no-project-selected').show();
    }
    if (value !== '') {
      $submit_button.removeAttr('disabled');
      $('.glr-no-project-selected').hide();
    }

    if (value !== old_value){
      $this.attr('data-value-was', value);
      var selector = $('#principals input:checked').map(function(){ return '#' + $(this).val() }).get().join(', ');
      $('#users-list').attr('data-checkbox-selector', selector);
      FetchUsers();
    }
  });

  $('body').on("change keyup input", '#filter_users', RMPlus.Utils.debounce(250, function(event){
    $this = $(this);
    var value = $this.val().trim();
    var old_value = $this.attr('data-value-was');
    if (value == ''){
      jQuery('#users-list label.one-name').show();
    }
    else{
      jQuery('#users-list label.one-name').hide();
      jQuery('#users-list label.one-name:Contains('+value+')').show();
    }

    if (value != old_value){
      $this.attr('data-value-was', value)
      FetchUsers();
    }
  }));

  $('#filter_roles').on("change keyup input", function(){
    var value = $(this).val().trim();
    if (value == ""){
      $('#roles-list label.one-name').show();
    }
    else {
      $('#roles-list label.one-name').hide();
      $('#roles-list label.one-name:Contains('+value+')').show();
    }
  });

  $('#filter_users_global_roles').on("change keyup input", function(){
    var value = $(this).val().trim();
    if (value == ""){
      $('#users-list-global-roles label.one-name').show();
    }
    else {
      $('#users-list-global-roles label.one-name').hide();
      $('#users-list-global-roles label.one-name:Contains('+value+')').show();
    }
  });

});