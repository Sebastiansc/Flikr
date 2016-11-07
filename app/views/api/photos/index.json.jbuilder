@photos.each do |photo|
  json.set! photo.id do
    json.partial! 'photo_show', photo: photo
  end
end
