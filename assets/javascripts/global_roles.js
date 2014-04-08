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

$(document).ready(function(){
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
});