import React from 'react'
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import Api from '../Api'
import { inject, observer } from 'mobx-react';
import Login from './Login'
import { Navigation, Stack } from '../nav/Navigation'
import stores from '../stores'

@inject('User')
@observer
class TheGoodStuff extends React.Component {

  componentDidMount(){
    this.props.User.signIn()
  }
  renderContent = () => {
    if (this.props.User.loggedIn !== true){
      return <Login />
    }
    else {
      return <Stack />
    }
  }

  render(){
    return(
      <View style={styles.container}>
        {this.renderContent()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default TheGoodStuff
