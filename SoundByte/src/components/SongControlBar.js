import React from 'react';
import { Text, Image, View, Modal, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { inject, observer } from 'mobx-react';
import SongPlayer from './SongPlayer';
const DEVICE_WIDTH = Dimensions.get('window').width;

@inject('Store')
@observer
class SongControlBar extends React.Component {
  constructor(props) {
    super(props);
  }

  goToPlayer = (song = this.props.Store.getSongList[0]) => {
    //return this.props.navigation.navigate('SongPlayer', { song: song })
    return (
      <View>
        <Modal animationType="slide" visible={true} style={{height: 500, flex: 1}}>
          <SongPlayer song={song} />
        </Modal>
      </View>
    )
  }

  //TODO: Only show if there is a current song
  render() {
    return (
      <TouchableOpacity activeOpacity={1} onPress={this.goToPlayer} style={styles.bar}>
        <Image style={styles.albumCover} source={{ uri: this.props.Store.getSongList[0].album.images[0].url }}/>
        <Text numberOfLines={1} style={styles.songTitle}>{this.props.Store.getSongList[0].name}</Text>
        {/* <Text style={styles.songArtist}>{this.props.Store.getSongList[0].artists.map(artist => artist.name).join(', ')}</Text> */}
        <View style={styles.content}>
          <TouchableOpacity activeOpacity={.5} style={styles.button}>
            <Icon name={'play-arrow'} size={35} style={{ color: 'white' }} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.5} style={styles.button}>
            <Icon name={'fast-forward'} size={35} style={{ color: 'white' }} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
  )
  }
}

const styles = StyleSheet.create({
  bar: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 50,
    opacity: .9,
    borderTopWidth: 1,
    borderColor: 'black',
    backgroundColor: 'lightgray',
    height: 60,
    width: DEVICE_WIDTH,
    alignItems: 'center'
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  songTitle: {
    paddingHorizontal: 5
  },
  albumCover: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
  },
  button: {
    marginHorizontal: 5,
    alignItems: 'flex-end',
    justifyContent: 'center'
  }
});

export default SongControlBar;
