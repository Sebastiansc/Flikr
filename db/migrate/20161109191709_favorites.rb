class Favorites < ActiveRecord::Migration[5.0]
  def change
    create_table :favorites do |t|
      t.integer :photo_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :favorites, [:photo_id, :user_id]
  end
end
