$(document).ready(function(){
  var getSegment = function (url, index) {
    return url.replace(/^https?:\/\//, '').split('/')[index];
  }

  // Save contents of 'roles/edit' view in variable and remove them from DOM
  var edit_partial = $('form.edit_role')[0].outerHTML;
  $('form.edit_role').remove();
  // Send get request to render tabs
  var role_id = getSegment(window.location.pathname, 2);
  $.get("/roles/"+role_id+"/render_roles_tabs")
    // on successful request insert view contents in the div for the corresponding tab
    .success(function(data) {
      $('div#tab-content-roles_edit').html(edit_partial);
    })
    // put cut content back if request failed
    .error(function(jqXHR, textStatus, errorThrown){
      $('div#content h2').after(edit_partial)
    });

  // Let's initialize global variable for autocomplete to work and pass correct url for ajax GET request from backend
  // Also initialize default value for checkbox_selector field, which holds jquery selector for checked checkboxes
  var AutoCompleteForUser = AutoCompleteForUser || {};
  AutoCompleteForUser.url = '<%= escape_javascript autocomplete_for_user_role_path(@role) %>'
  if (typeof AutoCompleteForUser.checkbox_selector === 'undefined') {
    AutoCompleteForUser.checkbox_selector = '';
  }

});