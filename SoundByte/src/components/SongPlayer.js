import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList, StyleSheet, ListView } from 'react-native';
import {
    Player,
    MediaStates
} from 'react-native-audio-toolkit';
import SongItem from './SongItem'
import { inject, observer } from 'mobx-react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Dimensions from 'Dimensions'
import SongTitle from '../helper_components/SongTitle';
import ArtistsText from '../helper_components/ArtistsText';

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
            <SongItem addHeart handlePlayButton={() => this.initializeAndPlay(item)} buttonType='play' item={item}/>
         }
         keyExtractor={(item, index) => index}
        />
      )
    }
  }

  showPlaylistBar = () => {
    return (
      <View style={{ flex: .2, flexDirection: 'row', borderRadius: 4, borderBottomWidth: 1, borderColor: '#d6d7da', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 40 }}>
        <TouchableOpacity>
          <Icon style={{ fontSize: 40 }} name="fast-rewind" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon style={{ fontSize: 50 }} name="pause" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon style={{ fontSize: 40 }} name="fast-forward" />
        </TouchableOpacity>
      </View>
    )
  }

  showCurrentTrack = () => {
    const DEVICE_WIDTH = Dimensions.get('window').width;
    return (
      <View style={styles.container}>
        <Image style={{flex: 1, marginBottom: 5, resizeMode: 'contain', width: DEVICE_WIDTH, height: 100}} source={{ uri: this.state.song.album.images[0].url }}/>
        <SongTitle name={this.state.song.name} />
        <ArtistsText artists={this.state.song.artists.map(artist => artist.name).join(', ')} />
      </View>
    )
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
})

export default SongPlayer
