import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SongTitle from '../helper_components/SongTitle';
import ArtistsText from '../helper_components/ArtistsText';

class LikeItem extends React.Component {
  constructor(props){
    super(props)
  }

  handlePress = () => {
    // use this.props.item.id
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.songContainer}>
          <Image style={styles.albumCover} source={{ uri: this.props.item.album.images[0].url }}/>
          <View style={styles.songDescriptionView}>
            <SongTitle name={this.props.item.name} />
            <ArtistsText artists={this.props.item.artists.map(artist => artist.name).join(', ')} />
          </View>
        </View>
        <TouchableOpacity style={styles.addOrPlay} onPress={this.props.handlePlayButton}>
          <Icon name={'spotify'} size={35} style={{ color: 'green' }} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: 'lightgrey',
    paddingVertical: 10,
    justifyContent: 'space-between',
    paddingLeft: 10,
  },
  songContainer: {
    flex: .7,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
  },
  addOrPlay: {
    alignSelf: 'center',
    marginHorizontal: 10,
    height: 30,
  },
  addOrPlayText: {
    fontSize: 14,
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: 'lightgrey',
  },
  songTitle: {
    fontSize: 16,
    color: 'black',
  },
  songArtist: {
    fontSize: 14,
    color: 'lightgrey',
    flexWrap: 'wrap',
  },
  songBox: {
    paddingLeft: 15,
    flexDirection: 'row'
  },
  songDescriptionView: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  artist: {
    justifyContent: 'flex-end',
    flexDirection: 'column'
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 15,
    flex: .2
  },
  albumCover: {
    width: 60,
    height: 60,
    marginRight: 8,
  },
})

export default LikeItem;
