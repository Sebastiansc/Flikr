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

json.comments photo.comments.length

json.favorites photo.fans.length

if photo.albums.empty?
  json.albums({})
else
  json.set! :albums do
    photo.albums.each do |album|
      json.set! album.id do
        json.extract! album, :id, :title, :owner_id
        json.set! :cover_photo do
          json.extract! album.cover_photo, :thumb_url, :author_id, :id
        end
        json.items album.photos.length
      end
    end
  end
end
