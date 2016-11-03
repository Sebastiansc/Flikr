@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :img_url, :title, :description, :author_id, :album_id, :id, :thumb_url
    json.username photo.author.username
  end
end
