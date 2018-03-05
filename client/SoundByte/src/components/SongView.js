import React from 'react'
import { FlatList, Text, View, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { inject, observer } from 'mobx-react'
//import TrackPlayer from 'react-native-track-player';

@inject('Store')
@observer

class SongView extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
//     TrackPlayer.setupPlayer().then(() => {
//     // The player is ready to be used
// });
//     TrackPlayer.setupPlayer().then(async () => {
//
//     // Adds a track to the queue
//     await TrackPlayer.add({
//         id: 'trackId',
//         url: this.props.Store.getSongList[0].uri,
//         title: 'Track Title',
//     });
//
//     // Starts playing it
//     TrackPlayer.play();
//
// });
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>
          hi
        </Text>
      </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    marginTop: 17,
    marginBottom: 17,
    width: window.width,
  },
  headerClose: {
    position: 'absolute',
    top: 10,
    left: 0,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerText: {
    color: "#FFF",
    fontSize: 18,
    textAlign: 'center',
  },
  songImage: {
    marginBottom: 20,
  },
  songTitle: {
    color: "white",
    fontFamily: "Helvetica Neue",
    marginBottom: 10,
    marginTop: 13,
    fontSize: 19
  },
  albumTitle: {
    color: "#BBB",
    fontFamily: "Helvetica Neue",
    fontSize: 14,
    marginBottom: 20,
  },
  controls: {
    flexDirection: 'row',
    marginTop: 30,
  },
  back: {
    marginTop: 22,
    marginLeft: 45,
  },
  play: {
    marginLeft: 50,
    marginRight: 50,
  },
  forward: {
    marginTop: 22,
    marginRight: 45,
  },
  shuffle: {
    marginTop: 26,
  },
  volume: {
    marginTop: 26,
  },
  sliderContainer: {
    width: window.width - 40,
  },
  timeInfo: {
    flexDirection: 'row',
  },
  time: {
    color: '#FFF',
    flex: 1,
    fontSize: 10,
  },
  timeRight: {
    color: '#FFF',
    textAlign: 'right',
    flex: 1,
    fontSize: 10,
  },
  slider: {
    height: 20,
  },
  sliderTrack: {
    height: 2,
    backgroundColor: '#333',
  },
  sliderThumb: {
    width: 10,
    height: 10,
    backgroundColor: '#f62976',
    borderRadius: 10 / 2,
    shadowColor: 'red',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 2,
    shadowOpacity: 1,
  }
});

export default SongView
