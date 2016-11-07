class AddIndexToAlbumsOwner < ActiveRecord::Migration[5.0]
  def change
    add_index :albums, :owner_id
  end
end
