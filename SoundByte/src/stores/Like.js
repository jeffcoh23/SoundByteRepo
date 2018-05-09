import { action, observable } from 'mobx'
import Api from '../Api'

class Like {
  @observable loading = false;
  @observable all = [];
  likesPath = '/likes'


  @action async fetchAll(){
    this.isLoading = true
    const response = await Api.get(this.likesPath)
    const status = response.status
    if (status === 200 ){
      const data = await response.json()
      console.log('Fetched All Likes')
      this.all = await data
    }
  }

  @action async add(playlistItemId){
    this.loading = true
    const response = await Api.post(this.likesPath, { playlist_item_id: playlistItemId })
    const status = response.status
    if (status == 201) {
      const data = await response.json()
      this.fetchAll();

    }
  }
}

export default new Like();
