class Api::UsersController < ApplicationController

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
    @photos = @user.photos.includes(:tags)
  end

  def create
    @user = User.new(user_params)
    if @user.valid?
      @user.save!
      @photos = @user.photos
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :cover_photo, :image_url)
  end
end
