json.extract! @user, :username, :id, :cover_photo, :image_url
json.set! :join_year, @user.created_at.year
json.photos @user.photos do |photo|
  json.extract! photo, :title, :description, :img_url, :author_id, :album_id, :id, :thumb_url, :feed_url, :show_url
  json.taken time_ago_in_words(photo.created_at)
end
