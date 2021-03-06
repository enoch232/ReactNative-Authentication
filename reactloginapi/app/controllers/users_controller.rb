class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
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
        format.html{render plain: @user.access_token}
        format.json{ render json: @user}
      end
    else
      respond_to do |format|
        format.html{ render :new, notice: @user.errors}
        format.json{ render json: @user.errors}
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
