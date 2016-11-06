class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.where(photo_id: params[:photo_id]).includes(:author)
  end

  def create
    @comment = Comment.new
    @comment.author_id = current_user.id
    if @comment.valid?
      @comment.save!
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = Comment.find(paramd[:id])
    @comment.update_attributes(comment_params)
    render :show
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy!
    render :show
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :photo_id);
  end
end
