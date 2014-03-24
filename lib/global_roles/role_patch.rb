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
      def principals_by_global_roles
        principal_ids = GlobalRole.select(:user_id).where(role_id: self.id)
        principals = Principal.where(id: principal_ids)
        principals.select do |principal|
          if principal.respond_to?('active?')
            principal.active?
          else
            true
          end
        end
      end

      def global_roles
        global_roles = GlobalRole.where(role_id: self.id)
      end

      def principals
        principals = Principal.active.with_projects_and_memberships
                              .where(projects: {id: Project.active.all.map(&:id)}, member_roles: {role_id: self.id})
                              .uniq

      end

    end

  end
end
