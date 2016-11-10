json.extract! photo, :title, :description, :img_url, :author_id, :id, :thumb_url, :feed_url, :show_url, :public
json.taken time_ago_in_words(photo.created_at)
json.set! :author do
  json.extract! photo.author, :username, :image_url, :cover_photo, :id
end
json.tags photo.tags, :name, :id
json.set! :favorites do
  photo.favorites.each do |favorite|
    json.set! favorite.id do
      json.user_id favorite.user_id
    end
  end
end
