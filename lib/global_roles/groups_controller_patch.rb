module GlobalRoles
  module GroupsControllerPatch
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
        @group = Group.find(params[:id])
        GlobalRole.find(params[:rid]).destroy
        respond_to do |format|
          format.html { redirect_to :controller => 'groups', :action => 'edit', :tab => 'groups-global-roles' }
          format.js
        end
      end


      def create_global_role
        @group = Group.find(params[:id])
        @roles = params[:roles]

        if @roles.is_a?(Array)
          @roles.each{ |role_id| GlobalRole.create(:user_id => @group.id, :role_id => role_id ) }
        end  
        
        respond_to do |format|        
          format.html { redirect_to :controller => 'groups', :action => 'edit', :tab => 'groups-global-roles' }
          format.js
        end
      end

    end
  
  end
end