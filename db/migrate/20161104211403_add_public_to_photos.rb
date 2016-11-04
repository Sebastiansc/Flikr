class AddPublicToPhotos < ActiveRecord::Migration[5.0]
  def change
    add_column :photos, :public, :boolean, default: false
  end
end
