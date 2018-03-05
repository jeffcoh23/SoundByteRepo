import React from 'react'
import { inject, observer } from 'mobx-react'
import { Text, View, StyleSheet } from 'react-native';

@inject('Store')
@observer
class MainNav extends React.Component {

  render = () => {
    const {Store} = this.props
    return (
      <View style={{flex: 1}}>
        {Store.MainComp}
      </View>
    )
  }
}

export default MainNav
