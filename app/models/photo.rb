class Photo < ApplicationRecord
  validates :image_url, :title, :author, presence: true

  belongs_to :user
end
