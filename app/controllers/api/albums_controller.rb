class Api::AlbumsController < ApplicationController
  def index
    if params[:user_id]
      @albums = Album.where(owner_id: params[:user_id]).includes(photos: [:author, :tags])
    else
      @albums = Album.joins(:album_photos).
                where('album_photos.photo_id = ?', params[:photo_id]).
                includes(photos: [:author, :tags])
    end
  end

  def create
    @album = Album.new(album_params)
    @album.owner_id = current_user.id
    if @album.valid?
      @album.save!
      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def destroy
    @album = Album.find(params[:id])
    return unless @album
    @album.destroy!
    render :show
  end

  def update
    @album = Album.find(params[:id])
    if @album.update_attributes(album_params)
      render :show
    else
      render json: @album.errors.full_messages, status: 401
    end
  end

  def show
    @album = Album.find(params[:id])
    @photos = @album.photos
  end

  def add_photo
    @photo = Photo.find(params[:photo_id])
    @album = Album.find(params[:album_id])
    @album.photos << @photo
    unless @album.background_url
      @album.update_attribute(:background_url, @photo.show_url)
    end
    render 'api/photos/show'
  end

  def remove_photo
    @album = Album.find(params[:album_id])
    @album.album_photos.find_by(photo_id: params[:photo_id]).destroy
    render 'api/photos/show'
  end

  private
  def album_params
    params.require(:album).permit(:title, :description)
  end
end
