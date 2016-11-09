class Api::FavoritesController < ApplicationController
  def create
    Favorite.create!({user_id: current_user.id, photo_id: params[:photo_id]})
  end

  def destroy
    Favorite.find_by({
        current_user.id,
        photo_id: params[:photo_id]
      }).destroy
  end
end
