class SessionsController < ApplicationController
  
  def new
  end

  def create
    @user = User.find_by(email: params[:email])

    if @user && @user.authenticate(params[:password])
      respond_to do |format|
        format.html{redirect_to root_path, notice: "User successfully signed in!"}
        format.json{ render json: @user}
      end
    else
      respond_to do |format|
        format.html{render :new, notice: "email or password is incorrect"}
        format.json{render json: @user.errors}
      end
    end
  end
end
