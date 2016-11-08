class FixMigration < ActiveRecord::Migration[5.0]
  def change
    remove_column :albums, :cover_photo
    add_column :albums, :cover_photo_id, :integer
  end
end
