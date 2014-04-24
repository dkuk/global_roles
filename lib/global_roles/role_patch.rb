module GlobalRoles
  module RolePatch
    def self.included(base)
      base.extend(ClassMethods)
      base.send(:include, InstanceMethods)

      base.class_eval do
        has_many :global_roles, :dependent => :destroy
        has_many :principals_by_global_roles, :through => :global_roles,
                 :source => :principal,
                 :class_name => 'Principal'
        has_many :principals, :through => :members,
                 :include => [:projects, :memberships],
                 :conditions => ["#{Principal.table_name}.status = #{Principal::STATUS_ACTIVE}",
                                 "#{Project.table_name}.status = #{Project::STATUS_ACTIVE}"],
                 :uniq => true,
                 :order => "#{Principal.table_name}.type, #{Principal.table_name}.lastname"
      end
    end

    module ClassMethods

    end

    module InstanceMethods

    end

  end
end
