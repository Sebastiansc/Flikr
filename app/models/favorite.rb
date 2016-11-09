class Favorite < ActiveRecord::Base
  validates :photo, :user, presence: true
  belongs_to :photo
  belongs_to :user
end
