class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(params_user)
    if @user.save
      respond_to do |format|
        format.html{redirect_to root_path, notice: "User successfully registered!"}
        format.json{@user.access_token}
      end
    else
      respond_to do |format|
        format.html{render :new, notice: @user.errors}
        format.json{@user.errors}
      end
    end
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def params_user
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end

end
