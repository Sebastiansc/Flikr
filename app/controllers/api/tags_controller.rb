class Api::TagsController < ApplicationController
  def index
    @tags = Tag.all
  end

  def create
    @tag = Tag.find_by(name: tag_params[:name])
    unless @tag
      @tag = Tag.new(tag_params)
      @tag.save!
    end
    Tagging.create!({photo_id: params[:photo_id], tag_id: @tag.id})
    render :show
  end

  def destroy
    @tag = Tag.find(params[:id])
    return unless @tag
    @tag.destroy!
    render :show
  end

  private
  def tag_params
    params.require(:tag).permit(:name)
  end
end
