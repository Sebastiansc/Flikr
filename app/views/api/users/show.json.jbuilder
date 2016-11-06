json.set! :author do
  json.extract! @user, :username, :id, :cover_photo, :image_url
  json.set! :join_year, @user.created_at.year
end
@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :img_url, :title, :description, :author_id, :album_id, :id, :thumb_url, :feed_url, :show_url, :public
    json.taken time_ago_in_words(photo.created_at)
    json.set! :author do
      json.extract! @user, :username, :id, :cover_photo, :image_url
    end
    json.tags photo.tags, :name, :id
  end
end
