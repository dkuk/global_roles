module GlobalRoles
  module PrincipalPatch

    def self.included(base)
      base.extend(ClassMethods)
      base.send(:include, InstanceMethods)

      base.class_eval do
        scope :with_global_role_id, lambda { select("#{Principal.table_name}.*, #{GlobalRole.table_name}.id AS gr_id") }
      end
    end

    module ClassMethods
    end

    module InstanceMethods
    end

  end
end