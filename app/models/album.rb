class Album < ApplicationRecord
  validates :title, presence: true

  has_many :album_photos, dependent: :destroy


  belongs_to :owner, class_name: :User

  has_many :photos,
  through: :album_photos,
  source: :photo
end
