@albums.each do |album|
  json.set! album.id do
    json.partial! 'album', album: album, photos: album.photos
  end
end
