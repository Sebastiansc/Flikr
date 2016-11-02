json.extract! @photo, :title, :description, :img_url, :author_id, :album_id, :id, :width, :height
json.set! :author do
  json.extract! @photo.author, :username, :image_url
end
