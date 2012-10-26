module GlobalRoles
  module UsersHelperPatch
    def self.included(base)
      base.extend(ClassMethods)
      base.send(:include, InstanceMethods)  
  
      base.class_eval do  
        alias_method_chain :user_settings_tabs, :global_roles
      end
    end 
  
    module ClassMethods   
    end
  
    module InstanceMethods 
      def user_settings_tabs_with_global_roles
        tabs = user_settings_tabs_without_global_roles
        tabs.push({:name => 'users-global-roles', :partial => 'roles/global_roles', :label => :label_global_roles})
        tabs
      end
    end
  
  end
end