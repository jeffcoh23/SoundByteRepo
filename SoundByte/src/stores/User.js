import { observable, action } from 'mobx'
import Api from '../Api'

class User {
  @observable loggedIn = false
  @observable all = [];
  @observable isLoading = false
  sessionsPath = '/sessions'
  usersPath = '/users'

  signIn(email = null, password = null) {
    const store = {
      email: 'jeffcoh23@gmail.com',
      password: 'Test12345',
      authentication_token: 'NTF355z2xt-fVBg6RQtP',
    }
    this.createSession(store.email, store.password)
  }

  @action async createSession(email, password) {
    const response = await Api.post(this.sessionsPath, {email, password})
    const status = await response.status
    if (status == 201) {
      const body = await response.json();
      this.loggedIn = true;
    }
  }

  @action async addUser(email, user_name, password){
    const response = await Api.post(this.usersPath, { email, username, password } )
    const status = await response.status
    if (status == 201) {
      console.log('success')
    }
    else {
      console.log('failed: ', status)
    }
  }

  @action async fetchAll() {
    const response = await Api.get(this.usersPath);
    const status = await response.status;
    console.log("status: ", status)
    //TODO: put status logic if (status === 200)
    const data = await response.json();
    this.all = await data
  }
}

export default new User();
