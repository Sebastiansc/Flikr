class RemoveAlbumIdFromPhotos < ActiveRecord::Migration[5.0]
  def change
    remove_column :photos, :album_id
  end
end
