class V1::UsersController < ApplicationController
  def index
    render json: User.all
  end

  def create
  end

  private

  # def user_params
  #   params.require(:user)
  # end
end
