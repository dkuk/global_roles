module GlobalRolesHelper

  def authorized_globaly_to?(controller, action)
    User.current.global_permission_to?(controller, action)
  end

  def authorized_globaly?
    User.current.global_permission_to?(params[:controller], params[:action])
  end   

end