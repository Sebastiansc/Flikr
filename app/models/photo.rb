class Photo < ApplicationRecord
  validates :image_url, :title, :author, presence: true

  belong_to :user
end
