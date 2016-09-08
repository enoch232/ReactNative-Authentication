class User < ApplicationRecord
  has_secure_password
  has_many :posts
  attr_accessor :password, :password_confirmation
  #before_create :verify_password_confirmation
  def verify_password_confirmation
  	binding.pry
  	if password == password_confirmation
  	  puts "Password correct"
  	  binding.pry
  	else
  		puts "Password Incorrect"
  		binding.pry
  	end
  end
end
