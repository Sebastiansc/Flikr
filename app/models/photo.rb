class Photo < ApplicationRecord
  validates :img_url, :author, :feed_url, :show_url, :thumb_url, presence: true

  belongs_to :author,
  class_name: :User

  has_many :album_photos, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :taggings, dependent: :destroy
  has_many :favorites, dependent: :destroy

  has_many :fans,
  through: :favorites,
  source: :user

  has_many :tags,
  through: :taggings,
  source: :tag

  has_many :albums,
  through: :album_photos,
  source: :album

  def self.in_proximity(start_id)
    Photo.where(id: (start_id.to_i - 21)...(start_id.to_i + 21))
  end

  def self.feed_stream(limit = 30, offset = 0)
    Photo.where(public: true).
      includes(:author, :tags, :favorites, :comments, albums: :photos).
      order('photos.created_at ASC').
      limit(limit).
      offset(offset)
  end

  def self.by_tag(tag_id)
    Photo.joins(:taggings).where('taggings.tag_id = ?', tag_id).includes(:tags, :author, :favorites, :comments, albums: :photos)
  end
end
