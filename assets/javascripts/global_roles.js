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

jQuery(document).ready(function(){

  jQuery('#filter_roles').bind("change keyup input",function(){
    if (jQuery(this).val() == ""){
      jQuery('#roles-list label.one-name').show();
    }
    else{
      jQuery('#roles-list label.one-name').hide();
      jQuery('#roles-list label.one-name:Contains('+jQuery(this).val()+')').show();
    }
  });
})