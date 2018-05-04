import React from 'react'
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import SbApi from '../Api/SbApi'
import { inject, observer } from 'mobx-react';
import Login from './Login'
const Api = new SbApi();
import { Navigation, Stack } from '../nav/Navigation'
import Store from '../stores/Store'

@inject('Store')
@observer
class TheGoodStuff extends React.Component {

  renderContent = () => {
    if (this.props.Store.email == undefined && this.props.Store.authToken == undefined){
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
