@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :img_url, :title, :description, :author_id, :album_id, :id, :thumb_url, :feed_url, :show_url, :public
    json.taken time_ago_in_words(photo.created_at)

    json.set! :author do
      json.extract! photo.author, :username, :image_url, :cover_photo, :id
    end

    json.tags photo.tags, :name, :id
  end
end
