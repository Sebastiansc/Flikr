class Photo < ApplicationRecord
  validates :img_url, :author, :feed_url, :show_url, :thumb_url, presence: true

  belongs_to :author,
  class_name: :User

  has_many :comments, dependent: :destroy

  has_many :taggings, dependent: :destroy

  has_many :tags,
  through: :taggings,
  source: :tag

  def self.feed_stream(limit = 50, offset = 0)
    Photo.where(public: true).
      includes(:author, :tags).
      order('photos.created_at DESC').
      limit(limit).
      offset(offset)
  end

  def self.by_tag(tag_id)
    Photo.joins(:taggings).where(:tag_id == tag_id)
  end
end
