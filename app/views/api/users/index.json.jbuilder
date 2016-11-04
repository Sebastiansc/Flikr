@users.each do |user|
  json.extract! :username, :id
  json.set! :join_year, user.created_at.year
end
