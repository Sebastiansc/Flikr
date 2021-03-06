class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, uniqueness: true, length: { minimum: 3 }
  attr_reader :password
  after_initialize :ensure_session_token

  has_many :photos, foreign_key: :author_id
  has_many :comments, foreign_key: :author_id
  has_many :albums, foreign_key: :owner_id
  has_many :favorites, dependent: :destroy

  has_many :favorite_photos,
  through: :favorites,
  source: :photo

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end
end
