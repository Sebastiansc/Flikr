class AlbumPhoto < ApplicationRecord
  validates :album, :photo, presence: true
  validates_uniqueness_of :album, scope: :photo
  belongs_to :album
  belongs_to :photo
end
