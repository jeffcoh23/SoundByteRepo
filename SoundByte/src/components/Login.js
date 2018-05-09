import React from 'react'
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import Api from '../Api'
import SbApiRoutes from '../Api/SbApiRoutes'
const ApiRoutes = new SbApiRoutes();
import { inject, observer } from 'mobx-react';

import stores from '../stores'

@inject('User')
@observer
class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      username: ''
    }
  }
  login = () => {
    console.log(this.state.email)
    console.log(this.state.password)
    this.props.User.signIn(this.state.email, this.state.password)
  }
  render(){
    return(
      <View style={styles.loginBackground}>
        <TextInput style={styles.username} onChangeText={email => this.setState({ email })} placeholder={'Enter an email'} />
          <TextInput style={styles.username} onChangeText={username => this.setState({ username })} placeholder={'Enter a username'} />
          <TextInput style={styles.username} onChangeText={password => this.setState({ password })} placeholder={'Enter a password'} />
          <TouchableOpacity style={styles.signIn} onPress={this.login}>
            <Text> Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUp} onPress={this.pressStuff}>
          <Text> Sign up</Text>
      </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  loginBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  username: {

  },
  password: {

  },
  signIn: {

  },
  signUp: {

  }
})

export default Login
