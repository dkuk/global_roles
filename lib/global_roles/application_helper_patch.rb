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
      def render_tabs_with_ajax(tabs, selected=nil)
        html = ''
        if tabs.respond_to?(:ajax)
          if (tabs.ajax)
            if (tabs.any?)
              unless tabs.detect {|tab| tab[:name] == selected}
                selected = nil
              end
              selected ||= tabs.first[:name]
              html << render(:partial => 'common/ajax_tabs', :locals => {:tabs => tabs, :selected_tab => selected}).to_s
            else
              html << content_tag('p', l(:label_no_data), :class => "nodata").to_s
            end
          else
            html << render_tabs_without_ajax(tabs, selected).to_s
          end
        else
          html << render_tabs_without_ajax(tabs, selected).to_s
        end

        html << '<script type="text/javascript">'
        html << "element = $('div.tabs a.selected').get(0);"
        html << "console.log(element);"
        html << "RMPlus.Utils.fetchData.apply(element);delete element;"
        html << '</script>'
        html.html_safe
      end
    end

  end
end