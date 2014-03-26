module GlobalRoles
  module RolesControllerPatch
    def self.included(base)
      base.extend(ClassMethods)
      base.send(:include, InstanceMethods)

      base.class_eval do
        include ApplicationHelper
        helper ApplicationHelper
        include GlobalRolesHelper
        helper GlobalRolesHelper

        before_filter :role_finder, :only => [:render_roles_tabs, :autocomplete_for_user, :destroy_global_role, :create_global_role, :remove_user_from_role, :add_user_to_role, :edit_user_projects_by_role]
      end
    end

    module ClassMethods
    end

    module InstanceMethods
      def role_finder
        @role = Role.find(params[:id])
      end

      def render_roles_tabs
        @principals = @role.principals_by_global_roles
        @global_roles = @role.global_roles
        @other_principals = Principal.active - @principals

        @role_principals = @role.principals
        @other_role_principals = Principal.active.includes(:projects, :memberships) - @role_principals
        @projects = Project.active.all

        respond_to do |format|
          format.js
          format.html { redirect_to :controller => 'roles', :action => 'edit' }
        end
      end

      def autocomplete_for_user
        respond_to do |format|
          format.js
        end
      end

      def destroy_global_role
        global_role = GlobalRole.find(params[:gr_id])
        global_role.destroy

        @global_roles = @role.global_roles
        @principals = @role.principals_by_global_roles
        @other_principals = Principal.active - @principals

        @role_principals = @role.principals
        @other_role_principals = Principal.active.includes(:projects, :memberships) - @role_principals
        @projects = Project.active.all

        respond_to do |format|
          format.html { redirect_to :controller => 'roles', :action => 'edit', :tab => 'users_by_global_role' }
          format.js
        end
      end

      def create_global_role
        @principal_ids = params[:principals]

        if @principal_ids.is_a?(Array)
          @principal_ids.each{|principal_id| GlobalRole.create(:user_id => principal_id, :role_id => @role.id ) }
        end

        @global_roles = @role.global_roles
        @principals = @role.principals_by_global_roles
        @other_principals = Principal.active - @principals

        @role_principals = @role.principals
        @other_role_principals = Principal.active.includes(:projects, :memberships) - @role_principals
        @projects = Project.active.all

        respond_to do |format|
          format.html { redirect_to :controller => 'roles', :action => 'edit', :tab => 'users_by_global_role' }
          format.js
        end
      end

      def remove_user_from_role
        member_role = MemberRole.where(:member_id => params[:member_id], :role_id => @role.id).first
        member_role.destroy

        @role_principals = @role.principals
        @projects = Project.active.all

        respond_to do |format|
          format.html { redirect_to :controller => 'roles', :action => 'edit', :tab => 'users_by_role' }
          format.js
        end
      end

      def add_user_to_role
        @principal_ids = params[:principals] || []

        if @principal_ids.is_a?(Array)
          @principal_ids.each do |principal_id|
            member = Member.find_or_new(params[:project_id], principal_id)
            if !member.roles.include?(@role)
              member.roles << @role
            end
            member.save
          end
        end

        @role_principals = @role.principals
        @projects = Project.active.all

        respond_to do |format|
          format.html { redirect_to :controller => 'roles', :action => 'edit', :tab => 'users_by_role' }
          format.js
        end
      end

      def edit_user_projects_by_role
        @principal_ids = []
        if params[:membership]
          if params[:principal_id]
            principal_id = params[:principal_id]
            attrs = params[:membership].dup
            project_ids = attrs.delete(:project_ids)

            member_roles = MemberRole.joins(:member).where('members.project_id NOT IN (?)', project_ids).where(:role_id => @role.id)
            member_roles.destroy_all

            project_ids.each do |project_id|
              member = Member.find_or_new(project_id, principal_id)
              member.member_roles << MemberRole.new(:role_id => @role.id, :member_id => member.id)
              member.save
              @principal_ids << principal_id
            end
          end
        end
        @role_principals = @role.principals
        @projects = Project.active.all

        respond_to do |format|
          format.html { redirect_to :controller => 'roles', :action => 'edit', :tab => 'users_by_role' }
          format.js
        end
      end

    end
  end
end