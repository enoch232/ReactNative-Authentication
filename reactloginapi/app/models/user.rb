class User < ApplicationRecord
  has_many :posts, dependent: :destroy
  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  has_secure_password
  before_create :set_access_token

  private
  
  def set_access_token
  	begin
  	  self.access_token = SecureRandom.hex
  	end while self.class.exists?(access_token: access_token) 
  end

end
