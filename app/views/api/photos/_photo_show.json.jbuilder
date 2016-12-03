author ||= photo.author

json.extract!(
  photo,
  :title,
  :description,
  :img_url,
  :author_id,
  :id,
  :thumb_url,
  :feed_url,
  :show_url,
  :public
)

json.taken time_ago_in_words(photo.created_at)

json.set! :author do
  json.extract! author, :username, :image_url, :cover_photo, :id
end

json.tags photo.tags, :name, :id

json.set! :albums do
  photo.albums.each do |album|
    json.set! album.id do
      json.extract! album, :id, :cover_photo, :title, :owner_id
      json.items album.photos.length
    end
  end
end
