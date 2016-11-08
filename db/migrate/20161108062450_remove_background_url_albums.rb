class RemoveBackgroundUrlAlbums < ActiveRecord::Migration[5.0]
  def change
    remove_column :albums, :background_url
    add_column :albums, :cover_photo, :integer
  end
end
