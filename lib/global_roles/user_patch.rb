module GlobalRoles
  module UserPatch
    def self.included(base)
      base.extend(ClassMethods)
      base.send(:include, InstanceMethods)

      base.class_eval do
        has_many :x_roles, :class_name => 'GlobalRole', :foreign_key => 'user_id' #, :include => :roles
        has_many :global_roles, :source => :role, :through => :x_roles,

        scope :have_global_permissions, lambda { |permission|
          joins(:global_roles).where("permissions LIKE '%:#{permission}\n%'")
        }
      end
    end

    module ClassMethods
    end

    module InstanceMethods

      def global_permission_to?(controller, action)
        return true if admin?

        roles = (global_roles + groups.collect {|gr| gr.global_roles}.flatten).uniq
        roles << Role.anonymous unless self.logged?

        not roles.detect { |r|
          r.allowed_to?({:controller => controller, :action => action})
        }.nil?

      end

    end

  end
end
