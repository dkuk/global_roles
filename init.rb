Redmine::Plugin.register :global_roles do
  name 'Global Roles plugin'
  author 'Danil Kukhlevskiy'
  description 'This is a plugin for Redmine which provides of standart Roles privelegies usage without of projects.'
  version '0.0.1'
  url 'http://'
  author_url 'http://'
end

Rails.application.config.to_prepare do
  User.send(:include, GlobalRoles::UserPatch)
  Group.send(:include, GlobalRoles::GroupPatch)
  UsersHelper.send(:include, GlobalRoles::UsersHelperPatch)
  UsersController.send(:include, GlobalRoles::UsersControllerPatch)
  GroupsHelper.send(:include, GlobalRoles::GroupsHelperPatch)
  GroupsController.send(:include, GlobalRoles::GroupsControllerPatch)  

  ApplicationController.send(:include, GlobalRoles::ApplicationControllerPatch)
end
