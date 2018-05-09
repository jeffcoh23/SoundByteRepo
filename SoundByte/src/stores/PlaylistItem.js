import { observable, action } from 'mobx'
import Api from '../Api'

class PlaylistItem {
  playlistItemPath = '/playlist_items'

  @action async add(data) {
    const response = await Api.post(this.playlistItemPath, data)
    const status = await response.status

    if (status === 201){
      console.log("Success, playlist_item added")
    }
  }

}

export default new PlaylistItem()
