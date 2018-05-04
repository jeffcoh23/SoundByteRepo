import React from 'react'
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import SbApi from '../Api/SbApi'

const Api = new SbApi();
import { inject, observer } from 'mobx-react';

import Store from '../stores/Store'

@inject('Store')
@observer
class Login extends React.Component {
  pressStuff = () => {
    this.props.Store.login('http://localhost:3000/v1/sessions.json?email=jeffcoh23@gmail.com&password=Test12345', { email: 'jeffcoh23@gmail.com', token: 'NTF355z2xt-fVBg6RQtP' })
  }
  render(){
    return(
      <View style={styles.loginBackground}>
        <TouchableOpacity onPress={this.pressStuff}>
          <Text>createUsdfser</Text>
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
  }
})

export default Login
