module GlobalRolesHelper

  def authorized_globaly_to?(controller, action)
    if User.current.global_permission_to?(controller, action)
      true
    else
       render_403
    end
  end

  def authorized_globaly?
    if User.current.global_permission_to?(params[:controller], params[:action])
      true
    else
       render_403
    end
  end   

end