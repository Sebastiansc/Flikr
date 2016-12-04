class Api::PhotosController < ApplicationController
  def index
    @photos = Photo.feed_stream
  end

  def by_tag
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
      if params[:album_id]
        Album.find(params[:album_id]).photos << @photo
      end
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
      if @album.cover_photo_id
        @album.photos << @photo
      else
        @album.update_attribute(:cover_photo_id, @photo.id)
      end
      render :show
    else
      render json: ['Invalid parameters'], status: 422
    end
  end

  def fans
    @users = Photo.find(params[:photo_id]).fans
    render 'api/users/index'
  end

  private

  def photo_params
    params.require(:photo).permit(
      :img_url,
      :title,
      :description,
      :thumb_url,
      :show_url,
      :feed_url,
      :public
    )
  end
end
