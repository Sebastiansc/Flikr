class FixImageUrlDefault < ActiveRecord::Migration[5.0]
  def change
    change_column_default(:users, :image_url, '/assets/profile_avatar.png')
  end
end
