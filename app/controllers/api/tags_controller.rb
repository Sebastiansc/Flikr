class Api::TagsController < ApplicationController
  def index
    @tags = Tag.joins(:taggings).
            group('tags.id').
            having('COUNT(*) > 0').
            includes(:photos)
  end

  def create
    @tag = Tag.find_by(name: tag_params[:name])
    unless @tag
      @tag = Tag.new(tag_params)
      @tag.save!
    end
    @feed_url = Photo.find(params[:photo_id]).feed_url
    @tag.update_attribute(:background_url, @feed_url)
    Tagging.create!({photo_id: params[:photo_id], tag_id: @tag.id})
    render :show
  end

  def destroy
    @tag = Tag.find(params[:id])
    return unless @tag
    @tag.destroy!
    render :show
  end

  def untag
    Tagging.where(tag_id: params[:tag_id], photo_id: params[:photo_id])
    .destroy_all
    @tag = Tag.find(params[:tag_id])
    render :show
  end

  private
  def tag_params
    params.require(:tag).permit(:name)
  end
end
