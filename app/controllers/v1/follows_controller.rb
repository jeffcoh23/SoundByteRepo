class V1::Follow < ApplicationController
  def index
    render json: payload, status: :ok
  end

  private

  def payload
    current_user.followees.includes(:user_songs).map do |followee|
      {
        user_name: followee.user.user_name,
        song_count: followee.user_songs.count,
        profile_picture: 'https://cdn.images.dailystar.co.uk/dynamic/58/photos/424000/620x/Lionel-Messi-664872.jpg'
      }
    end
  end
end
