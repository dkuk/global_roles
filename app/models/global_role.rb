class GlobalRole < ActiveRecord::Base
  unloadable

  belongs_to :role
  belongs_to :principal, :foreign_key => :user_id

end
