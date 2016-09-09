class User < ApplicationRecord
  has_many :posts, dependent: :destroy
  #attr_accessor :name, :email, :password, :password_confirmation
  has_secure_password
  before_create :set_access_token

  private
  
  def set_access_token
  	begin
  	  self.access_token = SecureRandom.hex
  	end while self.class.exists?(access_token: access_token) 
  end

end
