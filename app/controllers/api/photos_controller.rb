class Api::PhotosController < ApplicationController
  def index
    @photos = Photo.all.includes(:author, :comments)
  end

  def show
    @photo = Photo.find(params[:id])
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.author_id = current_user.id
    if @photo.valid?
      @photo.save!
      render :show
    else
      render json: ['Invalid parameters'], status: 422
    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    return unless @photo
    @photo.destroy!
    render :show
  end

  def update
    @photo = Photo.find(params[:id])
    if @photo.update_attributes(photo_params)
      render :show
    else
      render json: ['Invalid parameters'], status: 422
    end
  end

  private

  def photo_params
    params.require(:photo).permit(:img_url, :title, :description, :thumb_url, :show_url, :feed_url)
  end
end
