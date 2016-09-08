class ApiKey < ApplicationRecord
  before_create :generate_key

  def generate_key
  	begin
  	  self.access_token = SecureRandom.hex
  	end while self.class.exists?(access_token: access_token)
  	access_token
  end
end
