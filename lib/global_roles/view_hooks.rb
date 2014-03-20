module GlobalRoles
  module GlobalRoles
    class Hooks < Redmine::Hook::ViewListener
      render_on(:view_layouts_base_html_head, :partial => 'hooks/global_roles/head')
    end
  end
end