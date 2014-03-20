# Plugin's routes
# See: http://guides.rubyonrails.org/routing.html
RedmineApp::Application.routes.draw do

  post 'groups/:id/create_global_role', :controller => 'groups', :action => 'create_global_role', :id => /\d+/
  delete 'groups/:id/destroy_global_role/:rid', :controller => 'groups', :action => 'destroy_global_role', :id => /\d+/, :rid => /\d+/

  post 'users/:id/create_global_role', :controller => 'users', :action => 'create_global_role', :id => /\d+/
  delete 'users/:id/destroy_global_role/:rid', :controller => 'users', :action => 'destroy_global_role', :id => /\d+/, :rid => /\d+/

  get 'roles/:id/render_roles_tabs', :controller => 'roles', :action => 'render_roles_tabs', :id => /\d+/
  post 'roles/:id/create_global_role', :controller => 'roles', :action => 'create_global_role', :id => /\d+/

  delete 'roles/:id/destroy_global_role/:gr_id', :controller => 'roles', :action => 'destroy_global_role', :id => /\d+/, :gr_id => /\d+/
  #get 'roles/:id/show_users_by_global_role', :controller => 'roles', :action => 'show_users_by_global_role', :id => /\d+/
end

