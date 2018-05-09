import { observable, action } from 'mobx'
import Api from '../Api'

class Feed {
  @observable all = []

  feedPath = '/feed'

  @action async fetchAll() {
    const response = await Api.get(this.feedPath)
    const status = await response.status
    //if (status == 201) {
      const data = await response.json()
      console.log('data: ', data)
      this.all = await data
    //}
  }
}

export default new Feed()
