module GlobalRoles
  module ApplicationControllerPatch
    def self.included(base)
      base.extend(ClassMethods)
      base.send(:include, InstanceMethods)  
  
      base.class_eval do
        include GlobalRolesHelper
        helper :global_roles     
      end
    end
  
    module ClassMethods   
    end
    
    module InstanceMethods 
    end
  
  end
end
