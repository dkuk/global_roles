# Plugin's routes
# See: http://guides.rubyonrails.org/routing.html
RedmineApp::Application.routes.draw do

  post 'groups/:id/create_global_role', :controller => 'groups', :action => 'create_global_role', :id => /\d+/
  delete 'groups/:id/destroy_global_role/:rid', :controller => 'groups', :action => 'destroy_global_role', :id => /\d+/, :rid => /\d+/

  post 'users/:id/create_global_role', :controller => 'users', :action => 'create_global_role', :id => /\d+/
  delete 'users/:id/destroy_global_role/:rid', :controller => 'users', :action => 'destroy_global_role', :id => /\d+/, :rid => /\d+/

  resources :roles do
    member do
      get 'autocomplete_for_user'
    end
  end

  get 'roles/:id/render_roles_tabs', :controller => 'roles', :action => 'render_roles_tabs', :id => /\d+/
  post 'roles/:id/create_global_role', :controller => 'roles', :action => 'create_global_role', :id => /\d+/
  delete 'roles/:id/destroy_global_role/:gr_id', :controller => 'roles', :action => 'destroy_global_role', :id => /\d+/, :gr_id => /\d+/

  post 'roles/:id/add_user_to_role', :controller => 'roles', :action => 'add_user_to_role', :id => /\d+/
  delete 'roles/:id/remove_user_from_role/:user_id/projects/:project_id', :controller => 'roles', :action => 'remove_user_from_role', :id => /\d+/, :user_id => /\d+/, :project_id => /\d+/

end

