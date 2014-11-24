module GlobalRoles
  module MemberRolePatch
    def self.included(base)
      base.send(:include, InstanceMethods)

      base.class_eval do
        alias_method_chain :remove_member_if_empty, :global_roles
      end
    end

    module InstanceMethods
      # REDMINE BUG
      def remove_member_if_empty_with_global_roles
        if self.member
          remove_member_if_empty_without_global_roles
        end
      end
    end

  end
end
