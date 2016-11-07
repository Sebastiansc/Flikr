class AddMainImageToAlbums < ActiveRecord::Migration[5.0]
  def change
    add_column :albums, :background_url, :string
  end
end
