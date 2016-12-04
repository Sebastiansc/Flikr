class Photo < ApplicationRecord
  validates :img_url, :author, :feed_url, :show_url, :thumb_url, presence: true

  belongs_to(
    :author,
    class_name: :User
  )

  has_many :album_photos, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :taggings, dependent: :destroy
  has_many :favorites, dependent: :destroy

  has_many(
    :fans,
    through: :favorites,
    source: :user
  )

  has_many(
    :tags,
    through: :taggings,
    source: :tag
  )

  has_many(
    :albums,
    through: :album_photos,
    source: :album
  )

  def self.feed_stream(offset, limit)
    if limit != "undefined"
      Photo.where(public: true)
           .includes(*preload)
           .order('photos.created_at DESC')
           .offset(offset)
           .limit(limit)
           .includes(*Photo.preload)
    else
      Photo.where(public: true)
           .includes(*preload)
           .order('photos.created_at DESC')
           .includes(*Photo.preload)
    end
  end

  def self.preload
    [
      :tags,
      :author,
      :comments,
      albums: :photos
    ]
  end

  def self.by_tag(tag_id)
    Photo.joins(:taggings)
         .where('taggings.tag_id = ?', tag_id)
         .includes(*preload)
  end
end
