class Api::PhotosController < ApplicationController
  def index

  end

  def show

  end

  def create
    
  end

  def destroy

  end

  def update

  end

  private
  def photo_params
    params.require(:photo).permit(:image_url, :description, :title)
  end
end
