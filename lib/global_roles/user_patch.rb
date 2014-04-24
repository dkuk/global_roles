module GlobalRoles
  module UserPatch
    def self.included(base)
      base.send(:include, InstanceMethods)

      base.class_eval do
        has_many :x_roles, :class_name => 'GlobalRole', :foreign_key => 'user_id' #, :include => :roles
        has_many :global_roles, :source => :role, :through => :x_roles

        scope :have_global_permissions, lambda { |permission|
          joins(:global_roles).where("permissions LIKE '%:#{permission}\n%'")
        }
      end
    end

    module InstanceMethods

      def global_permission_to?(*args)
        return true if (self.admin?)

        roles = (self.global_roles + self.groups.collect { |gr| gr.global_roles }.flatten).uniq
        roles << Role.anonymous unless self.logged?

        case args.size
          when 1
            return !roles.detect { |r| r.allowed_to?(args.first) }.nil?
          when 2
            return !roles.detect { |r| r.allowed_to?({ controller: args.first, action: args.last }) }.nil?
        end
      end
    end
  end
end
