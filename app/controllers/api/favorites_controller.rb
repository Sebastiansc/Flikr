class Api::FavoritesController < ApplicationController
  before_action :set_photo

  def create
    @favorite = Favorite.create!({user_id: current_user.id, photo_id: params[:photo_id]})
    render :show
  end

  def destroy
    @favorite = Favorite.find_by({
        user_id: current_user.id,
        photo_id: params[:photo_id]
      }).destroy
    render :show
  end

  private
  def set_photo
    @photo = Photo.find(params[:photo_id])
  end
end
