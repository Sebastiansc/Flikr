class Photo < ApplicationRecord
  validates :img_url, :title, :author, :thumb_url, presence: true

  belongs_to :author,
  class_name: :User
  has_many :comments
end
