class Api::UsersController < ApplicationController

  def index
    @users = User.all
  end

  def favorites
    @photos = User.find(params[:user_id]).favorite_photos.
      includes(:tags, :author, :comments, :favorites, :albums)
    render 'api/photos/index'
  end

  def show
    @user = User.find(params[:id])
    @photos = @user.photos.includes(:tags, :author, :favorites, :albums, :comments)
  end

  def create
    @user = User.new(user_params)
    if @user.valid?
      @user.save!
      @photos = @user.photos
      login(@user)
      render 'api/sessions/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def change_cover
    @user = User.find(params[:user_id])
    @photos = @user.photos.includes(:tags, :author, :favorites)
    @user.update_attribute(:cover_photo, Photo.find(params[:photo_id]).show_url)
    render :show
  end


  def change_profile_pic
    @user = User.find(params[:user_id])
    @photos = @user.photos.includes(:tags, :author, :favorites)
    @user.update_attribute(:image_url, params[:url])
    render :show;
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :cover_photo, :image_url)
  end
end
