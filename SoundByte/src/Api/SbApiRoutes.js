class SbApiRoutes {
  constructor(headers = {}){
    this.headers = headers
  }

  sessionPath(data = {}) {
    return `http://localhost:3000/v1/sessions.json?email=${data.email}&password=${data.password}`
  }

  createSong(data = {}) {
    return `http://localhost:3000/v1/songs.json?name=${data.name}&preview_url=${data.preview_url}&` +
    `artists=${data.artists}&song_id=${data.song_id}&album_url=${data.album_url}`
  }
}

export default SbApiRoutes
