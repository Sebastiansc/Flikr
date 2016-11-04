class ChangeProfileAvatarDefault < ActiveRecord::Migration[5.0]
  def change
    change_column_default(:users, :image_url, "http://res.cloudinary.com/flikr/image/upload/c_scale,h_195/v1478245250/profile_avatar_aiyfxi.png")
  end
end
