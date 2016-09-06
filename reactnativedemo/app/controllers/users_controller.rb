module API
	class UsersController < ApplicationController

	  def index
	  	@users = User.all
	  	respond_to do |format|
	  		format.json
	  	end
	  end

	  def new
	  	@user = User.new
	  end

	  def create
	  	@user = User.new(params[:users])
	  	@user.access_token = ApiKey.create.access_token
	  	if @user.save
	  		respond_to do |format|
		  		format.json
		  	end
	  	else
	  		respond_to do |format|
		  		format.json
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
end