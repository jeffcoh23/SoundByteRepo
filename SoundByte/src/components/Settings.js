import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Settings extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <Modal style={{flex: 1, backgroundColor: 'black'}}> </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Settings
