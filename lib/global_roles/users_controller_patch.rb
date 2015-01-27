module GlobalRoles
  module UsersControllerPatch
    def self.included(base)
      base.extend(ClassMethods)
      base.send(:include, InstanceMethods)

      base.class_eval do
      end
    end

    module ClassMethods
    end

    module InstanceMethods

      def destroy_global_role
        @user = User.find(params[:id])
        GlobalRole.find(params[:rid]).destroy
        respond_to do |format|
          format.html { redirect_to controller: 'users', action: 'edit', tab: 'users-global-roles' }
          format.js
        end
      end


      def create_global_role
        @user = User.find(params[:id])
        @role_ids = params[:roles]

        if @role_ids.is_a?(Array)
          @role_ids.each { |role_id| GlobalRole.create(user_id: @user.id, role_id: role_id) }
        end

        @global_role_ids = GlobalRole.select(:id).where(user_id: @user.id, role_id: @role_ids).map(&:id)

        respond_to do |format|
          format.html { redirect_to controller: 'users', action: 'edit', tab: 'users-global-roles' }
          format.js
        end
      end

    end

  end
end