
class UsersController < ApplicationController

  def index
  	@users = User.all
  	respond_to do |format|
  		format.html
  		format.json{render json: @users}
  	end
  end

  def new
  	@user = User.new
  end

  def create
  	@user = User.new(params.require(:user).permit(:name, :email, :password, :password_confirmation))
    binding.pry
    @user.verify_password_confirmation
  	@user.access_token = ApiKey.create.generate_key
  	if @user.save
  		respond_to do |format|
        format.html{redirect_to users_path}
	  		format.json{render json: @user}
	  	end
  	else
  		respond_to do |format|
        format.html{redirect_to users_path}
	  		format.json{render json: @user.errors}
	  	end
  	end
  end

  def edit
  end

  def update
  end

  def destroy
  end

end