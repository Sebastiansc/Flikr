class AddCoverPhoto < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :cover_photo, :string, default: '/assets/cover_photo.jpg'
  end
end
