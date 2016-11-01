class Photo < ApplicationRecord
  validates :img_url, :title, :author, presence: true

  belongs_to :author,
  foreign_key: :author_id,
  primary_key: :id,
  class_name: :User
end
