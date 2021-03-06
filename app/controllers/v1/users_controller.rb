class V1::UsersController < ApplicationController
  def index
    render json: payload, status: :ok
  end

  def create

  end

  private

  def payload
    User.all.map do |us|
      {
        user_name: us.user_name,
        song_count: us.playlist_items.count,
        profile_picture: 'https://cdn.images.dailystar.co.uk/dynamic/58/photos/424000/620x/Lionel-Messi-664872.jpg'
      }
    end
  end

  # def user_params
  #   params.require(:user)
  # end
end
