module GlobalRoles
  module RolesControllerPatch
    def self.included(base)
      base.extend(ClassMethods)
      base.send(:include, InstanceMethods)

      base.class_eval do
        include GlobalRolesHelper
        helper GlobalRolesHelper

        before_filter :role_finder, :only => self::InstanceMethods.instance_methods(false)
        before_filter :active_projects, :only => [:edit, :edit_user_projects_by_role, :show_users_by_role, :add_user_to_role,
                                                  :remove_user_from_role, :autocomplete_for_user]
      end
    end

    module ClassMethods
    end

    module InstanceMethods
      def role_finder
        @role = Role.find(params[:id])
      end

      def active_projects
        @projects = Project.active.all
      end

      def show_users_by_role
        render :partial => 'roles/show_users_by_role'
      end

      def show_users_by_global_role
        render :partial => 'roles/show_users_by_global_role'
      end

      def autocomplete_for_user
        respond_to do |format|
          format.js
        end
      end

      def destroy_global_role
        global_role = GlobalRole.find(params[:gr_id])
        global_role.destroy

        respond_to do |format|
          format.html { redirect_to :controller => 'roles', :action => 'edit', :tab => 'users_by_global_role' }
          format.js
        end
      end

      def create_global_role
        @principal_ids = params[:principals] || []

        if @principal_ids.is_a?(Array)
          @principal_ids.each{|principal_id| GlobalRole.create(:user_id => principal_id, :role_id => @role.id ) }
        end

        respond_to do |format|
          format.html { redirect_to :controller => 'roles', :action => 'edit', :tab => 'users_by_global_role' }
          format.js
        end
      end

      def remove_user_from_role
        members = Member.includes(:member_roles).where(:user_id => params[:user_id], :member_roles => {:role_id => @role.id})
        members.destroy_all

        respond_to do |format|
          format.html { redirect_to :controller => 'roles', :action => 'edit', :tab => 'users_by_role' }
          format.js
        end
      end

      def add_user_to_role
        @principal_ids = params[:principals] || []
        project_id = params[:project_id] || 0
        @edited_principal_ids = []

        if @principal_ids.is_a?(Array)
          @principal_ids.each do |principal_id|
            member = Member.find_or_new(params[:project_id], principal_id.to_i)
            if !member.roles.include?(@role)
              member.roles << @role
              @edited_principal_ids << principal_id
            end
            member.save

          end
        end
        logger.debug("@edited_principal_ids=#{@edited_principal_ids}")

        respond_to do |format|
          format.html { redirect_to :controller => 'roles', :action => 'edit', :tab => 'users_by_role'}
          format.js
        end
      end

      def edit_user_projects_by_role
        if params[:membership]
          if params[:membership][:principal_id]
            @principal_id = params[:membership][:principal_id]
            project_ids = params[:membership][:project_ids] || []

            if (project_ids.any?)
              member_roles = MemberRole.joins(:member).where('members.project_id NOT IN (?)', project_ids)
                                                      .where(:role_id => @role.id, :members => {:user_id => @principal_id})
            else
              member_roles = MemberRole.joins(:member).where(:role_id => @role.id, :members => {:user_id => @principal_id})
            end
            member_roles.destroy_all

            project_ids.each do |project_id|
              member = Member.find_or_new(project_id, @principal_id)
              member.member_roles << MemberRole.new(:role_id => @role.id, :member_id => member.id)
              member.save
            end
          end
        end

        respond_to do |format|
          format.html { redirect_to :controller => 'roles', :action => 'edit', :tab => 'users_by_role' }
          format.js
        end
      end

    end
  end
end