import { observable, action } from 'mobx'
import Api from '../Api'

class Follow {
  followPath = '/follows'

  @action async fetchAll(){

  }

  @action async addFollower(userId){
    const response = await Api.post(this.usersPath, { userId } )
    const status = await response.status
    if (status == 201) {
      console.log('success')
    }
    else {
      console.log('failed: ', status)
    }
  }
}
