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

end