json.extract! @comment, :body, :id
json.posted time_ago_in_words(@comment.updated_at)
json.set! :author do
  json.extract! @comment.author, :username, :image_url
end
