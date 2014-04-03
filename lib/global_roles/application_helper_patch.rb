module GlobalRoles
  module ApplicationHelperPatch
    def self.included(base)
      base.extend(ClassMethods)
      base.send(:include, InstanceMethods)

      base.class_eval do
        alias_method_chain :render_tabs, :ajax
      end
    end

    module ClassMethods
    end

    module InstanceMethods
      def render_tabs_with_ajax(tabs, selected=params[:tab])
        if tabs.respond_to?(:ajax)
          if (tabs.ajax)
            if (tabs.any?)
              unless tabs.detect {|tab| tab[:name] == selected}
                selected = nil
              end
              selected ||= tabs.first[:name]
              render :partial => 'roles/tabs', :locals => {:tabs => tabs, :selected_tab => selected}
            else
              content_tag 'p', l(:label_no_data), :class => "nodata"
            end
          else
            render_tabs_without_ajax(tabs, selected)
          end
        end
      end
    end

  end
end