class V1::FeedController < ApplicationController
  include ActionView::Helpers::DateHelper
  def index
    render json: payload, status: :ok
  end

  private

  def payload
    people_i_follow = current_user.following.ids
    songs = PlaylistItem.where(user_id: people_i_follow).includes(:song).order("created_at ASC")
    songs.map do |us|
      {
        id: us.song.id,
        created_at: "#{time_ago_in_words(us.song.created_at)} ago",
        song_owner: us.user.user_name,
        image_url: us.song.image_url,
        song_title: us.song.song_title,
        artists: us.song.artists,
        preview_url: us.song.preview_url
      }
    end
  end
end
