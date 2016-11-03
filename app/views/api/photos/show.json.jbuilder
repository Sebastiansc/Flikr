json.extract! @photo, :title, :description, :img_url, :author_id, :album_id, :id, :thumb_url
json.set! :author do
  json.extract! @photo.author, :username, :image_url
end
