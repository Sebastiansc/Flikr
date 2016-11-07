class Api::PhotosController < ApplicationController
  def index
    @photos = Photo.feed_stream
  end

  def by_tag()
    @photos = Photo.by_tag(params[:tag_id])
    render :index
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

  def create_and_add_to_album
    @album = Album.find(params[:album_id])
    @photo = Photo.new(photo_params)
    @photo.author_id = current_user.id
    if @photo.valid?
      @photo.save!
      @album.background_url = @photo.show_url unless @album.background_url
      @album.photos << @photo
      render 'api/albums/show'
    else
      render json: ['Invalid parameters'], status: 422
    end
  end

  private

  def photo_params
    params.require(:photo).permit(:img_url, :title, :description, :thumb_url, :show_url, :feed_url, :public)
  end
end
