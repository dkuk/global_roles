## Global Roles

#### Plugin for Redmine

This is a plugin for Redmine which implements a new entity "Out of project role".
Plugin provides usage of standart Roles privelegies out of Projects.
Now links group-role/user-role can be global and apply to the whole Redmine.

It adds Global Roles tab to Users and Groups which makes possible of User-to-Role and Group-to-Role relation.

![Interface](https://github.com/dkuk/global_roles/raw/master/screenshots/interface.png "Interface")
![Interface2](https://github.com/dkuk/global_roles/raw/master/screenshots/interface2.png "Interface2")

It could be used for global authentication to actions in plugins which does not bound to projects.
This plugin uses jQuery.

How to use:
 * __User.current.global_permission_to?(controller, action)__ - users method. Provides of check privelegies for any user
 * __authorized_globaly?__ - helper for applications before_filer, which check privelegies for current controller and action
 * __authorized_globaly_to?(controller, action)__ - helper, which check privelegies for pointed controller and action for current user

Methods always returns true for Admin users

#### Installation
To install plugin, go to the folder "plugins" in root directory of Redmine.
Clone plugin in that folder.

		git clone https://github.com/dkuk/global_roles.git

Perform plugin migrations (make sure performing command in the root installation folder of «Redmine»):

		rake redmine:plugins:migrate NAME=global_roles

Restart your web-server.

#### Supported Redmine, Ruby and Rails versions.

Plugin aims to support and is tested under the following Redmine implementations:
* Redmine 2.3.1
* Redmine 2.3.2
* Redmine 2.3.3

Plugin aims to support and is tested under the following Ruby implementations:
* Ruby 1.9.2
* Ruby 1.9.3
* Ruby 2.0.0

Plugin aims to support and is tested under the following Rails implementations:
* Rails 3.2.13

#### Copyright
Copyright (c) 2011-2013 Vladimir Pitin, Danil Kukhlevskiy.
[skin]: https://github.com/tdvsdv/redmine_alex_skin
For better appearance we recommend to use this plugin with Redmine skin of our team - [Redmine Alex Skin][skin].

Another plugins of our team you can see on site http://rmplus.pro
