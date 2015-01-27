module GlobalRoles
  module GroupPatch
    def self.included(base)
      base.extend(ClassMethods)
      base.send(:include, InstanceMethods)

      base.class_eval do
        has_many :x_roles, class_name: 'GlobalRole', foreign_key: 'user_id'
        has_many :global_roles, source: :role, through: :x_roles
      end
    end

    module ClassMethods
    end

    module InstanceMethods
    end

  end
end
