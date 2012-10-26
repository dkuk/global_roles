class CreateGlobalRoles < ActiveRecord::Migration
  def change
    create_table :global_roles do |t|
      t.integer :user_id
      t.integer :role_id
    end
  end
end
