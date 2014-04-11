module GlobalRoles
  module PrincipalPatch
    def self.included(base)
      base.extend(ClassMethods)
      base.send(:include, InstanceMethods)

      base.class_eval do
        belongs_to :role

        scope :with_projects_and_memberships, lambda {
          includes(:projects, :memberships)
          .joins("INNER JOIN #{Member.table_name} ON #{Member.table_name}.user_id = #{Principal.table_name}.id
                  INNER JOIN #{Project.table_name} ON #{Project.table_name}.id = #{Member.table_name}.project_id
                  INNER JOIN #{MemberRole.table_name} ON #{MemberRole.table_name}.member_id = #{Member.table_name}.id")
        }
      end
    end

    module ClassMethods
    end

    module InstanceMethods
    end

  end
end
