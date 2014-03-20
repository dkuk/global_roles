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
      end
    end

    module ClassMethods
    end

    module InstanceMethods
      def render_roles_tabs
      @role = Role.find(params[:id])
      @global_roles = @role.global_roles
      @users = @role.users_by_global_roles
      @excluded_users = User.all - @users
        respond_to do |format|
          format.js
          format.html { redirect_to :controller => 'roles', :action => 'edit' }
        end
      end

      def show_users_by_global_role
      end

      def destroy_global_role
        @role = Role.find(params[:id])
        global_role = GlobalRole.find(params[:gr_id])
        global_role.destroy

        @global_roles = @role.global_roles
        @users = @role.users_by_global_roles
        @excluded_users = User.all - @users

        respond_to do |format|
          format.html { redirect_to :controller => 'roles', :action => 'edit', :tab => 'users_by_global_role' }
          format.js
        end
      end

      def create_global_role
        @role = Role.find(params[:id])
        @user_ids = params[:users]

        if @user_ids.is_a?(Array)
          @user_ids.each{ |user_id| GlobalRole.create(:user_id => user_id, :role_id => @role.id ) }
        end

        @global_roles = @role.global_roles
        @users = @role.users_by_global_roles
        @excluded_users = User.all - @users

        respond_to do |format|
          format.html { redirect_to :controller => 'roles', :action => 'edit', :tab => 'users_by_global_role' }
          format.js
        end
      end

    end
  end
end