import React from 'react';
import { View, Text, Image, ScrollView, FlatList, StyleSheet, ListView } from 'react-native';
import {
    Player,
    MediaStates
} from 'react-native-audio-toolkit';
import SongItem from './SongItem'
import { inject, observer } from 'mobx-react'
import { Icon } from 'native-base'
import Dimensions from 'Dimensions'

@inject('Store')
@observer
class SongPlayer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      song: this.props.navigation.state.params.song
    }
  }

  componentDidMount(){
    this.initializeAndPlay(this.state.song)
  }

  initializeAndPlay = (song) => {
    let player = new Player(song.preview_url).prepare()
    player.play()
  }

  showList = () => {
    if (this.props.Store.getSongList){
      return(
        <FlatList
          data={this.props.Store.getSongList}
          renderItem={ ({ item }) =>
            <SongItem handlePlayButton={() => this.initializeAndPlay(item)} buttonType='play' item={item}/>
         }
         keyExtractor={(item, index) => index}
        />
      )
    }
  }

  showPlaylistBar = () => {
    return (
      <View style={{ flex: .2, flexDirection: 'row', borderRadius: 4, borderWidth: 1, borderColor: '#d6d7da', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 40 }}>
        <Icon style={{ fontSize: 40 }} name="rewind" />
        <Icon style={{ fontSize: 40 }} name="pause" />
        <Icon style={{ fontSize: 40 }} name="fastforward" />
      </View>
    )
  }

  showCurrentTrack = () => {
    const DEVICE_WIDTH = Dimensions.get('window').width;
    return <Image style={{flex: 1, marginBottom: 5, resizeMode: 'contain', width: DEVICE_WIDTH, height: 100}} source={{ uri: this.state.song.album.images[0].url }}/>
  }

  render(){
    return (
      <View style={{flex: 1}}>
        {this.showCurrentTrack()}
        {this.showPlaylistBar()}
        {this.showList()}
      </View>

    )
  }
}

export default SongPlayer
