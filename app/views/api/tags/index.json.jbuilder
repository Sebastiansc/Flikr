@tags.each do |tag|
  json.set! tag.id do
    json.extract! tag, :id, :name, :background_url
  end
end
