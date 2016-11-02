class Photo < ApplicationRecord
  validates :img_url, :title, :author, :width, :height, presence: true

  belongs_to :author,
  class_name: :User
end
