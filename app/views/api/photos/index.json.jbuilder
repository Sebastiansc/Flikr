@photos.each do |photo|
  json.set! photo.id do
    json.partial! partial: 'api/photos/photo_show', locals: {photo: photo}
  end
end
