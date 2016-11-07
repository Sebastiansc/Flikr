@tags.each do |tag|
  json.set! tag.id do
    json.extract! tag, :id, :name
    json.background tag.photos.first
  end
end
