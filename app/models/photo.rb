class Photo < ApplicationRecord
  validates :img_url, :author, :feed_url, :show_url, :thumb_url, presence: true

  belongs_to :author,
  class_name: :User

  has_many :comments

  has_many :taggings

  has_many :tags,
  through: :taggings,
  source: :tag

  def self.feed_stream(limit = 50, offset = 0)
    Photo.where(public: true).
      includes(:author, :tags).
      limit(limit).
      offset(offset)
  end
end
