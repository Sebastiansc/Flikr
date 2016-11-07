class Tag < ApplicationRecord
  validates :name, presence: true

  has_many :taggings, dependent: :destroy

  has_many :photos,
  through: :taggings,
  source: :photo

  has_one :photo,
  through: :taggings,
  source: :photo
end

# Add a background_url row to tags table
# Whena adding a new tagging or tag set the feed_url of the associated
# photo to the tag's background_url. Tags background_url will always be
# the last tagged image. Good enough
