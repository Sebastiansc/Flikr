# json.partial! partial: '../user', user: @user
json.extract! @user, :username, :id, :image_url
