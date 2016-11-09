json.set! :info do
  json.extract! @user, :username, :id, :cover_photo, :image_url
  json.join_year @user.created_at.year
end

json.set! :photos do
  @photos.each do |photo|
    json.set! photo.id do
      json.partial! partial: 'api/photos/photo_show', locals: {photo: photo}
    end
  end
end
