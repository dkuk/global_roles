jQuery(document).ready(function(){
  jQuery('#filter_users').bind("change keyup input",function(){
    var value = jQuery(this).val().trim();
    if (value == ""){
      jQuery('#users-list label').show();
    }
    else{
      jQuery('#users-list label').hide();
      jQuery('#users-list label:Contains('+value+')').show();
    }
  });
});