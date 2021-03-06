json.extract! album, :title, :description, :id
cover_photo = album.cover_photo

if cover_photo
  json.set! :cover_photo do
    json.partial!(
      partial: 'api/photos/photo_show',
      locals: { photo: cover_photo }
    )
  end
else
  json.cover_photo({})
end

json.set! :owner do
  json.extract! album.owner, :username, :id
end

json.num_photos photos.length
