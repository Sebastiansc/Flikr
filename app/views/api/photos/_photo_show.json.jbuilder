json.extract! photo, :title, :description, :img_url, :author_id, :id, :thumb_url, :feed_url, :show_url, :public
json.taken time_ago_in_words(photo.created_at)
json.set! :author do
  json.extract! photo.author, :username, :image_url, :cover_photo, :id
end
json.tags photo.tags, :name, :id

if(photo.favorites.length > 0)
  json.set! :favorites do
    photo.favorites.each do |favorite|
      json.set! favorite.user_id do
        json.partial! partial: 'api/favorites/favorite', locals: {favorite: favorite}
      end
    end
  end
else
  json.favorites({})
end
json.set! :albums do
  photo.albums.each do |album|
    json.set! album.id do
      json.extract! album, :id, :cover_photo, :title, :owner_id;
      json.items album.photos.length
    end
  end
end
