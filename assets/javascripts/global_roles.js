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

function debounce(delay, fn) {
  var timer = null;
  return function () {
    var context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}

function throttle(threshhold, fn, scope) {
  threshhold || (threshhold = 250);
  var last,
      deferTimer;
  return function () {
    var context = scope || this;

    var now = +new Date,
        args = arguments;
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}

var AutoCompleteForUser = AutoCompleteForUser || {};

$(document).ready(function(){

  function FetchUsers(){
    $.ajax({url: AutoCompleteForUser.url,
            type: 'get',
            data: {project_id: $('#project_id').val(), user_name: $('#filter_users').val().trim()},
            success: function(data){},
            beforeSend: function(){ $this.addClass('ajax-loading'); },
            complete: function(){ $this.removeClass('ajax-loading'); }
          });
  }

  $('body').on('change', '#project_id', function(){
    $this = $(this);
    var $submit_button = $('#add_user_to_role');
    var value = $this.val();
    var old_value = $this.attr('data-value-was');
    if (value === '') {
      $submit_button.attr('disabled', 'disabled');
    }
    if (value !== '') {
      $submit_button.removeAttr('disabled');
    }

    if (value !== old_value){
      $this.attr('data-value-was', value);
      AutoCompleteForUser.checkbox_selector = $('#principals input:checked').map(function(){ return '#' + $(this).val() }).get().join(', ');
      FetchUsers();
    }
  });

  $('body').on("change keyup input", '#filter_users', debounce(250, function(event){
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

  $('#filter_roles').bind("change keyup input", function(){
    var value = jQuery(this).val().trim();
    if (value == ""){
      jQuery('#roles-list label.one-name').show();
    }
    else{
      jQuery('#roles-list label.one-name').hide();
      jQuery('#roles-list label.one-name:Contains('+value+')').show();
    }
  });

  $('#filter_users_global_roles').bind("change keyup input", function(){
    var value = jQuery(this).val().trim();
    if (value == ""){
      jQuery('#users-list-global-roles label.one-name').show();
    }
    else{
      jQuery('#users-list-global-roles label.one-name').hide();
      jQuery('#users-list-global-roles label.one-name:Contains('+value+')').show();
    }
  });
})