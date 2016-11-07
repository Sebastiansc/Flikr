json.extract! album, :title, :description, :background_url, :id
json.set! :owner do
  json.extract! album.owner, :username, :id
end
json.set! :photos do
  json.array! album.photos do |photo|
    json.partial! partial: 'api/photos/photo_show', locals: {photo: photo}
  end
end
