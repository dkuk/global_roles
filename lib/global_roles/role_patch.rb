module GlobalRoles
  module RolePatch
    def self.included(base)
      base.extend(ClassMethods)
      base.send(:include, InstanceMethods)

      base.class_eval do

      end
    end

    module ClassMethods
    end

    module InstanceMethods
      def users_by_global_roles
        user_ids = GlobalRole.select(:user_id).where(role_id: self.id)
        users = User.where(id: user_ids)
      end

      def global_roles
        global_roles = GlobalRole.where(role_id: self.id)
      end
    end

  end
end
