class Api::AlbumsController < ApplicationController
  def index
    if params[:user_id]
      @albums = Album.where(owner_id: params[:user_id])
                     .includes(:cover_photo, photos: Photo.preload)
    else
      @albums = Album.joins(:album_photos)
                     .where('album_photos.photo_id = ?', params[:photo_id])
                     .includes(:cover_photo, photos: Photo.preload)
    end
  end

  def create
    @album = Album.new(album_params)
    @album.owner_id = current_user.id
    @album.cover_photo_id = params[:photos][0]
    if @album.valid?
      @album.save!
      @photos = photos(@album)
      params[:photos][1..-1].each { |id| @album.photos << Photo.find(id) }
      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def destroy
    @album = Album.find(params[:id])
    return unless @album
    @photos = photos(@album)
    @album.destroy!
    render :show
  end

  def update
    @album = Album.find(params[:id])
    if @album.update_attributes(album_params)
      @photos = photos(@album)
      render :show
    else
      render json: @album.errors.full_messages, status: 401
    end
  end

  def show
    @album = Album.find(params[:id])
    @photos = photos(@album)
  end

  def add_photo
    @photo = Photo.find(params[:photo_id])
    @album = Album.find(params[:album_id])
    @album.photos << @photo
    render 'api/photos/show'
  end

  def remove_photo
    @album = Album.find(params[:album_id])
    @photo = Photo.find(params[:photo_id])
    @album.album_photos.find_by(
      album_id: params[:album_id], photo_id: params[:photo_id]
    ).destroy
    render 'api/photos/show'
  end

  def change_cover_photo
    @album = Album.find(params[:album_id])
    @photo = Photo.find(params[:photo_id])
    @album.update_attribute(:cover_photo, @photo)
    render :cover_photo
  end

  private

  def photos(album)
    album.photos.includes(*Photo.preload)
  end

  def album_params
    params.require(:album).permit(:title, :description)
  end
end
