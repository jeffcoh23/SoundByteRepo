class V1::PlaylistItemsController < ApplicationController
  def create
    song = Song.new(song_params)
    if song.save
      current_user.playlist_items.create(song: song)
      render json: song
    else
      head(:bad_request)
    end
  end

  private

  # def payload
  #   current_user.user_songs.map do |song|
  #     {
  #
  #     }
  #   end
  # end

  def song_params
    params.require(:song).permit(:preview_url, :artists,
                                 :song_title, :image_url,
                                 :track_uid, :service_name)
  end
end
