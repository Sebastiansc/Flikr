class Tag < ApplicationRecord
  validates :name, presence: true

  has_many :taggings, dependent: :destroy

  has_many :photos,
  through: :taggings,
  source: :photo
end
