json.set! :author do
  json.extract! @user, :username, :id, :cover_photo, :image_url
  json.set! :join_year, @user.created_at.year
end
@photos.each do |photo|
  json.set! photo.id do
    json.partial! partial: 'api/photos/photo_show', locals: {photo: photo}
  end
end
