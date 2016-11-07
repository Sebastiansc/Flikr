class AddOwnerIdToAlbums < ActiveRecord::Migration[5.0]
  def change
    add_column :albums, :owner_id, :integer, null: false
  end
end
