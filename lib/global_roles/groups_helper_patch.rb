module GlobalRoles
  module GroupsHelperPatch
    def self.included(base)
      base.extend(ClassMethods)
      base.send(:include, InstanceMethods)  
  
      base.class_eval do  
        alias_method_chain :group_settings_tabs, :global_roles
      end
    end 
  
    module ClassMethods   
    end
  
    module InstanceMethods 
      def group_settings_tabs_with_global_roles(*args)
        if args.present?
          tabs = group_settings_tabs_without_global_roles(args[0])
        else
          tabs = group_settings_tabs_without_global_roles()
        end
        tabs.push({:name => 'groups-global-roles', :partial => 'roles/global_roles', :label => :label_global_roles})
        tabs
      end
    end
  
  end
end