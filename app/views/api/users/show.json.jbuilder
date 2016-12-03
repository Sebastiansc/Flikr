json.set! :info do
  json.extract! @user, :username, :id, :cover_photo, :image_url
  json.join_year @user.created_at.year
end

json.set! :photos do
  json.array! @photos do |photo|
    json.partial! partial: 'api/photos/photo_show', locals: {photo: photo}
  end
end
