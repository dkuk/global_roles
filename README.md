# Global Roles #

This is a plugin for Redmine which provides of linking group-role/user-role whithout of project. It could be used for global auth to actions in plugins which does not bound to projects
This plugin uses jQuery.

It adds Global Roles tab to Users and Groups which makes possible of User-to-Role and Group-to-Role relation.

How to use:
 * __User.current.global_permission_to?(controller, action)__ - users method
 * __authorized_globaly__ - helper for applications before_filer, which check privelegies for current controller and action
 * __authorized_globaly_to?(controller, action)__ - helper, which check privelegies for pointed controller and action for current user

Methods always returns true for Admin users