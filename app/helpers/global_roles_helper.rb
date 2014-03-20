module GlobalRolesHelper

  def authorized_globaly_to?(controller, action)
    User.current.global_permission_to?(controller, action)
  end

  def authorized_globaly?
    if User.current.global_permission_to?(params[:controller], params[:action])
      true
    else
       render_403
    end
  end

  def link_to_if_global_authorized(name, options = {}, html_options = nil, *parameters_for_method_reference)
    link_to(name, options, html_options, *parameters_for_method_reference) if User.current.global_permission_to?(options[:controller] || params[:controller], options[:action])
  end

  def roles_tabs
    tabs = [{:name => 'roles_edit', :partial => 'roles/edit_tab', :label => :label_permissions},
            {:name => 'users_by_global_role', :partial => 'roles/show_users_by_global_role', :label => :label_users_by_global_roles},
           ]

  end

end