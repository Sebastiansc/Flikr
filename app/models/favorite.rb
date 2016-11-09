class Favorite < ActiveRecord::Base
  validates :photo, :user, presence: true
  validates_uniqueness_of :photo, scope: :user
  
  belongs_to :photo
  belongs_to :user
end
