Redmine::Plugin.register :global_roles do
  name 'Global Roles plugin'
  author 'Danil Kukhlevskiy'
  description 'This is a plugin for Redmine which provides of standart Roles privelegies usage without of projects.'
  version '0.0.1'
  url 'http://'
  author_url 'http://'
end

require 'global_roles/view_hooks'

Rails.application.config.to_prepare do
  User.send(:include, GlobalRoles::UserPatch)
  Group.send(:include, GlobalRoles::GroupPatch)
  UsersHelper.send(:include, GlobalRoles::UsersHelperPatch)
  UsersController.send(:include, GlobalRoles::UsersControllerPatch)
  GroupsHelper.send(:include, GlobalRoles::GroupsHelperPatch)
  GroupsController.send(:include, GlobalRoles::GroupsControllerPatch)
  Role.send(:include, GlobalRoles::RolePatch)
  RolesController.send(:include, GlobalRoles::RolesControllerPatch)
  ApplicationController.send(:include, GlobalRoles::ApplicationControllerPatch)
  MemberRole.send(:include, GlobalRoles::MemberRolePatch)
end
