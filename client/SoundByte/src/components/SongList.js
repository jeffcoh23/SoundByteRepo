import React from 'react'
import { FlatList, Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { inject, observer } from 'mobx-react'
import SongItem from './SongItem'
import Icon from 'react-native-vector-icons/MaterialIcons';

@inject('Store')
@observer
class SongList extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Search',
    tabBarIcon: ({ white }) =>
      <Icon name={'search'} size={35} style={{ color: 'white' }} />
  };

  showList = () => {
    if (this.props.Store.getSongList){
      return(
        <FlatList
          data={this.props.Store.getSongList}
          renderItem={ ({ item }) =>
            <SongItem item={item}/>
         }
         keyExtractor={(item, index) => index}
        />
      )
    }
    else{
      return (
        <Text>
          hi
        </Text>
      )
    }
  }
  render(){
    return (
      <View>
      {this.showList()}
      </View>
    )
  }
}

export default SongList
