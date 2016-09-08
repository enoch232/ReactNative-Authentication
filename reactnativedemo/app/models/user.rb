class User < ApplicationRecord
  has_secure_password
  has_many :posts
  attr_accessor :password, :password_confirmation
end
