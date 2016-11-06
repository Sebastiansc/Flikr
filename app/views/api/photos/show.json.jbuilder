json.extract! @photo, :title, :description, :img_url, :author_id, :album_id, :id, :thumb_url, :feed_url, :show_url, :public
json.taken time_ago_in_words(@photo.created_at)
json.set! :author do
  json.extract! @photo.author, :username, :image_url, :cover_photo, :id
end
