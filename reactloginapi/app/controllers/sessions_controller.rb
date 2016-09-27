class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def new
  end

  def create
    @user = User.find_by(email: params[:email])

    if @user && @user.authenticate(params[:password])
      respond_to do |format|
        format.html{redirect_to root_path(access_token: @user.access_token), notice: "User successfully signed in!"}
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
