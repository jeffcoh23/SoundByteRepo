import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';
import FriendListItem from './FriendListItem'
import data from '../data/sample_people_data.json'
import { inject, observer } from 'mobx-react';
import Icon from 'react-native-vector-icons/MaterialIcons';


@observer
class FriendList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showSongs: false
    }
  }
  static navigationOptions = {
    tabBarLabel: 'Playlist',
    title: 'Playlist',
    tabBarIcon: ({ white }) =>
      <Icon name={'list'} size={35} style={{ color: 'white' }} />
  };

  showSongs = () => {
    this.setState({ showSongs: !this.state.showSongs })
  }

  addSongs = () => {
    //TODO needs to be fixed up
    return [1,2,3].map((joe) => <FriendListItem key={joe} addSong user={joe}/>)
  }
  render = () => {
    return (
      <View style={{flex:1}}>
        <TouchableOpacity onPress={this.showSongs} style={styles.myPlaylist}>
          <Icon name={'list'} size={35} style={{ color: 'white' }} />
        </TouchableOpacity>
        <View>
          {this.state.showSongs && this.addSongs()}
        </View>
        <FlatList
          style={{flex: 1}}
          data={data}
          renderItem={ ({item}) =>
            <FriendListItem style={{flex: 1}} addSong key={item.id} user={item}/>
          }
          keyExtractor={(item, index) => index}
        />
      </View>

    )
  }
}

const styles = StyleSheet.create({
  myPlaylist: {
    backgroundColor: 'black'
  }
})

export default FriendList;
