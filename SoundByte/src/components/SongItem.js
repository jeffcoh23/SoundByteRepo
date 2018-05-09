import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

class SongItem extends React.Component {
  constructor(props){
    super(props)
  }

  handlePress = () => {
    // use this.props.item.id
  }

  handleLike = () => {
    // use this.props.item.id
  }

  renderAddSongButton = () => {
    if (this.props.addSong) {
      return (
        <TouchableOpacity style={styles.addOrPlay} onPress={this.props.handleAddSong}>
          <Text style={styles.addOrPlayText}> Add Song </Text>
        </TouchableOpacity>
      )
    }
  }

  renderHeartButton = () => {
    if (this.props.addHeart) {
      return (
        <TouchableOpacity style={styles.heartButton} onPress={this.props.handleLike}>
          <Icon style={{ fontSize: 25 }} name="heart" />
        </TouchableOpacity>
      )
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.songContainer}>
          <Image style={styles.albumCover} source={{ uri: this.props.item.album.images[0].url }}/>
          <View style={styles.songDescriptionView}>
            <Text style={styles.songTitle}>{this.props.item.name}</Text>
            <Text style={styles.songArtist}>{this.props.item.artists.map(artist => artist.name).join(', ')}</Text>
          </View>
        </View>
        {this.renderAddSongButton()}
        {this.renderHeartButton()}
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
    borderWidth: 1,
    marginHorizontal: 10,
    borderColor: 'lightgrey',
    borderRadius: 10,
    height: 30,
  },
  heartButton: {
    alignSelf: 'center',
    marginRight: 10,
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

export default SongItem
