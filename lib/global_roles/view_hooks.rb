module GlobalRoles
  module GlobalRoles
    class Hooks < Redmine::Hook::ViewListener
      render_on(:view_layouts_base_html_head, partial: 'hooks/global_roles/head')
      render_on(:view_layouts_base_body_bottom, partial: 'hooks/global_roles/view_layouts_base_body_bottom')
    end
  end
end