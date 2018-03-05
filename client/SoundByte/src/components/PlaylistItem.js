import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Dimensions from 'Dimensions';
import { inject, observer } from 'mobx-react';


@inject('Store')
@observer
class PlaylistItem extends React.Component {

  handlePress = (user) => {
    this.props.Store.changePlaylistUser(user)
    this.props.Store.changeNavState('SongView')
  }

  render(){
    return (
      <TouchableOpacity onPress={() => this.handlePress(this.props.users.name)}>
        <View style={styles.container}>
          <View style={styles.playlistBox}>
            <Text style={styles.name}>{this.props.users.name}</Text>
            <Text style={styles.length}> Length: {this.props.users.playlistLength}</Text>
            <View style={styles.goToPlaylist}>
              <Icon name={'arrow-forward'} size={25}/>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 2,
    borderColor: 'lightgrey',
    paddingTop: 7,
    height: 50,
  },
  playlistBox: {
    justifyContent: 'center',
    paddingLeft: 15
  },
  name: {
    width: DEVICE_WIDTH - 10,
    fontSize: 20
  },
  length: {
    color: 'lightgrey',
    fontSize: 12
  },
  goToPlaylist: {
    flex: 1,
    paddingRight: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
})


const DEVICE_WIDTH = Dimensions.get('window').width;

export default PlaylistItem
