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

if photo.fans.empty?
  json.favorites({})
else
  json.set! :favorites do
    photo.fans.each do |fan|
      json.set! fan.id do
        json.partial! partial: 'api/users/user', locals: { user: fan }
      end
    end
  end
end

if photo.albums.empty?
  json.albums({})
else
  json.set! :albums do
    photo.albums.each do |album|
      json.set! album.id do
        json.extract! album, :id, :cover_photo, :title, :owner_id
        json.items album.photos.length
      end
    end
  end
end
