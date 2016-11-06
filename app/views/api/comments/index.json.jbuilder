@comments.each do |comment|
  json.set! :body do
    comment.body
  end
  json.set! :posted do
    time_ago_in_words(comment.updated_at)
  end
  json.set! :author do
    json.extract comment.author, :username, :image_url
  end
end
