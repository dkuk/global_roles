# Plugin's routes
# See: http://guides.rubyonrails.org/routing.html
RedmineApp::Application.routes.draw do

  post 'groups/:id/create_global_role', :controller => 'groups', :action => 'create_global_role', :id => /\d+/
  delete 'groups/:id/destroy_global_role/:rid', :controller => 'groups', :action => 'destroy_global_role', :id => /\d+/, :rid => /\d+/

  post 'users/:id/create_global_role', :controller => 'users', :action => 'create_global_role', :id => /\d+/
  delete 'users/:id/destroy_global_role/:rid', :controller => 'users', :action => 'destroy_global_role', :id => /\d+/, :rid => /\d+/  
end

