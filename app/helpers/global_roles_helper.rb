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
    tabs = [ {name: 'roles_edit', partial: 'roles/edit_tab', label: :label_permissions},
             {name: 'users_by_global_role', partial: 'roles/show_users_by_global_role', label: :label_users_by_global_role},
             {name: 'users_by_role', partial: 'roles/show_users_by_role', label: :label_users_by_role}
           ]
    return tabs
  end

  def projects_select_tag(html_id, projects)
    tag_options = options_for_select([["--- #{l(:actionview_instancetag_blank_option)} ---", '']]);
    # tag_options << options_from_collection_for_select(projects, 'id', 'name')
    tag_options << project_tree_options_for_select(projects, {})
    select_tag html_id, tag_options, class: 'glr-wide-input'
  end

  def principals_for_role_checkbox_tags(name, principals)
    html = ''
    principals.each do |principal|
      group_class = principal.instance_of?(Group) ? 'class="glr-group"' : ''
      html << "<label class='one-name'>#{check_box_tag name, principal.id, false, id: principal.id}"
      html << "<span #{group_class}>#{h principal}</span></label>\n"
    end
    html.html_safe
  end

  def render_principals_for_role(role, global = false)
    principals = Principal.active.like(params[:user_name]).order(:type, :lastname)

    principal_count = principals.count
    principal_pages = Redmine::Pagination::Paginator.new principal_count, 100, params[:page]
    principals = principals.offset(principal_pages.offset).limit(principal_pages.per_page).all

    s = content_tag('div', principals_for_role_checkbox_tags('principals[]', principals), id: 'principals')

    links = pagination_links_full(principal_pages, principal_count, per_page_links: false) do |text, parameters, options|
      if !global
        link_to text, autocomplete_for_user_role_path(role, parameters.merge(user_name: params[:user_name], format: 'js')), remote: true
      else
        link_to text, autocomplete_for_user_global_role_path(role, parameters.merge(user_name: params[:user_name], format: 'js')), remote: true
      end
    end

    s + content_tag('p', links, class: 'pagination')
  end

end