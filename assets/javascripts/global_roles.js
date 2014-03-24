// Case-insensetive search for jQuery >= 1.8
// jQuery.expr[":"].Contains = jQuery.expr.createPseudo(function(arg) {
//     return function( elem ) {
//         return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
//     };
// });

// Case-insensetive search for jQuery < 1.8
jQuery.expr[':'].Contains = function(elem, index, match) {
  return jQuery(elem).text().toUpperCase().indexOf(match[3].toUpperCase()) >= 0;
};

function observeSearchfieldRoleUsers(targetId, url) {
  $('#filter_users, #project_id').each(function() {
    var $this = $(this);
    $this.addClass('autocomplete');
    $this.attr('data-value-was', $this.val());
    var check = function() {
      var val = $this.val();
      if ($this.attr('data-value-was') != val){
        $this.attr('data-value-was', val);
        $.ajax({
          url: url,
          type: 'get',
          data: {project_id: $('#project_id').val(), user_name: $('#filter_users').val().trim()},
          success: function(data){ if(targetId) $('#'+targetId).html(data); },
          beforeSend: function(){ $this.addClass('ajax-loading'); },
          complete: function(){ $this.removeClass('ajax-loading'); }
        });
      }
    };
    var reset = function() {
      if (timer) {
        clearInterval(timer);
        timer = setInterval(check, 300);
      }
    };
    var timer = setInterval(check, 300);
    $this.bind('keyup click mousemove', reset);
  });
}

jQuery(document).ready(function(){
  $('body').on('change', '#project_id', function(){
    var value = $(this).val();
    var $submit_button = $('#add_user_to_role');
    if (value === '') {
      $submit_button.attr('disabled', 'disabled');
    }
    if (value !== '') {
      $submit_button.removeAttr('disabled');
    }
  });

  jQuery('#filter_roles').bind("change keyup input",function(){
    var value = jQuery(this).val().trim();
    if (value == ""){
      jQuery('#roles-list label.one-name').show();
    }
    else{
      jQuery('#roles-list label.one-name').hide();
      jQuery('#roles-list label.one-name:Contains('+value+')').show();
    }
  });

  jQuery('#filter_users').bind("change keyup input",function(){
    var value = jQuery(this).val().trim();
    if (value == ""){
      jQuery('#users-list label.one-name').show();
    }
    else{
      jQuery('#users-list label.one-name').hide();
      jQuery('#users-list label.one-name:Contains('+value+')').show();
    }
  });
})