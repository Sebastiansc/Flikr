@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :img_url, :title, :description, :author_id, :album_id, :id, :thumb_url
    json.set! :author do
      json.extract! photo.author, :username, :image_url
    end
  end
end
