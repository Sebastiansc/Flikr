class ChangeCovererPhotoDefault < ActiveRecord::Migration[5.0]
  def change
    change_column_default(:users, :cover_photo, 'https://res.cloudinary.com/flikr/image/upload/v1478238983/cover_photo_t1gvjt.jpg')
  end
end
