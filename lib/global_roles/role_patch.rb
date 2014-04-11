module GlobalRoles
  module RolePatch
    def self.included(base)
      base.extend(ClassMethods)
      base.send(:include, InstanceMethods)

      base.class_eval do
        has_many :global_roles, :dependent => :destroy
        has_many :principals_by_global_roles, :through => :global_roles, :source => :principal
      end
    end

    module ClassMethods
    end

    module InstanceMethods
      def principals
        principals = Principal.active.with_projects_and_memberships
                              .where(projects: {id: Project.active.all.map(&:id)}, member_roles: {role_id: self.id})
                              .uniq.order(:type, :lastname)

      end

    end

  end
end
