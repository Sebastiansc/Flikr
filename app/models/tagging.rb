class Tagging < ApplicationRecord
  validates_uniqueness_of :photo_id, :scope => :tag_id
  validates :photo, :tag, presence: true

  belongs_to :photo
  belongs_to :tag
end
