class AlbumPhoto < ApplicationRecord
  validates :album, :photo, presence: true
  belongs_to :album
  belongs_to :photo
end
