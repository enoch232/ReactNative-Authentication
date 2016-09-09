class SessionsController < ApplicationController
  
  def new
  end

  def create
    @user = User.find_by(email: params[:email])

    if @user && @user.authenticate(params[:password])
      respond_to do |format|
        format.html{redirect_to root_path, notice: "User successfully registered!"}
        format.json{@user}
      end
    else
      respond_to do |format|
        format.html{render :new, notice: "email or password is incorrect"}
        format.json{@user.errors}
      end
    end
  end
end
