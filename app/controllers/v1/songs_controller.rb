class V1::SongsController < ApplicationController
  def create
    song = Song.new(preview_url: params[:preview_url], artists: params[:artists], song_title: params[:name],
                    image_url: params[:album_url], track_uid: params[:song_id], service_name: 'spotify')
    if song.save
      current_user.user_songs.create(song: song)
      head(:created)
    else
      head(:bad_request)
    end
  end
end
