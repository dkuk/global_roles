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

  my.FetchUsers = function(element, data){
    $.ajax({url: $(element).attr('data-url'),
           type: 'get',
           data: data,
           success: function(data){},
           beforeSend: function(){ $(element).addClass('ajax-loading'); },
           complete: function(){ $(element).removeClass('ajax-loading'); }
    });
  }

  return my;
})(RMPlus.GlobalRoles || {});

function projectsFormShow(principal_id){
  $('#principal-'+principal_id+'-project-links').hide();
  var $principal = $('#principal-'+principal_id+'-projects');


  var project_ids = $principal.attr('data-project-ids');

  // trim [] from the string
  project_ids = project_ids.substring(1, project_ids.length-1).split(', ');
  // concatenate into jQuery selector to check projects already present
  project_ids_selector = project_ids.map(function(id){ return '#' + id;}).join(', ');

  if ($principal.find('input').length == 0){
    RMPlus.GlobalRoles.$projectsForm.clone().appendTo($principal);
  }
  $('#principal-'+principal_id+'-projects form').show();

  $principal.find('input').prop('checked', false);
  $principal.find(project_ids_selector).prop('checked', true);

  $principal.find('#edit_user_projects_by_role_principal_id').val('');
  $principal.find('#edit_user_projects_by_role_principal_id').val(principal_id);
  $principal.find('#projects-form-cancel').attr('data-principal-id', principal_id);
}

function projectsFormCancel(principal_id){
  $('#principal-'+principal_id+'-project-links').show();
  $('#principal-'+principal_id+' form').hide();
}

$(document).ready(function(){

  var t = $('#roles_tabs');
  $('#roles_tabs').remove();
  $('div#content h2').after(t);
  $('#roles_tabs').removeClass('I');

  var edit_partial = $('form.edit_role')[0].outerHTML;
  $('form.edit_role').remove();
  $('div#tab-content-roles_edit').html(edit_partial);

  RMPlus.GlobalRoles.$projectsForm = $('#member-projects-form');

  $('body').on("click", function (event){
    if (event.target.id === "projects-form-cancel"){
      var principal_id = event.target.getAttribute('data-principal-id');
      $('#principal-'+principal_id+'-project-links').show();
      $('#principal-'+principal_id+'-projects form').hide();
    }
  });

  $('#add_user_to_role').on("click", function(event){
    var value = $('#project_id').val();
    if (value === '') {
      event.preventDefault();
      $('.glr-no-project-selected').show();
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
      $this.attr('data-value-was', value);
      data = { project_id: $('#project_id').val(), user_name: value };
      RMPlus.GlobalRoles.FetchUsers(this, data);
    }
  }));

  $('body').on("change keyup input", '#filter_roles', function(){
    var value = $(this).val().trim();
    if (value == ""){
      $('#roles-list label.one-name').show();
    }
    else {
      $('#roles-list label.one-name').hide();
      $('#roles-list label.one-name:Contains('+value+')').show();
    }
  });

  $('body').on("change keyup input", '#filter_users_global_roles', RMPlus.Utils.debounce(250, function(){
    var $this = $(this);
    var value = $this.val().trim();
    var old_value = $this.attr('data-value-was');
    if (value == ""){
      $('#users-list-global-roles label.one-name').show();
    }
    else {
      $('#users-list-global-roles label.one-name').hide();
      $('#users-list-global-roles label.one-name:Contains('+value+')').show();
    }
    if (value != old_value){
      $this.attr('data-value-was', value);
      data = { user_name: value };
      RMPlus.GlobalRoles.FetchUsers(this, data);
    }
  }));

});