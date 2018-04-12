import React, { Component } from 'react';
import ReactNative, {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { inject, observer } from 'mobx-react'

@inject('Store')
@observer
class FeedItem extends React.Component {

  showSongView = () => {
    this.props.onSelectSong
  }


  render(){
    return (
      <View onPress={this.props.onSelectSong}
        style={styles.container}
      >
        <View style={styles.box}>
          <Image style={styles.profilePic} source={{ uri: this.props.item.album.images[0].url }}/>
          <Text style={{fontSize: 16}}>jeffcoh23</Text>
        </View>
        <TouchableOpacity onPress={this.props.onSelectSong} style={{flex: 1}}>
          <Image style={{flex: 1, marginVertical: 8}} source={{ uri: this.props.item.album.images[0].url }}/>
          <Text style={styles.songTitle}>{this.props.item.name}</Text>
          <Text style={styles.songArtist}>{this.props.item.artists.map(artist => artist.name).join(', ')}</Text>
          <Icon style={styles.statsBarIcon} name={'favorite'} size={35}/>

        </TouchableOpacity>
          <View style={styles.description}>
            <Text>This shit is so lit, bro!</Text>
            <Text>{Math.floor(Math.random() * Math.floor(1000))} plays</Text>
          </View>
          {/* <View style={styles.statsBar}>
            <Icon style={styles.statsBarIcon} name={'cake'} size={15}/>
            <Icon style={styles.statsBarIcon} name={'cake'} size={15}/>
          </View> */}
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    flex: 1,
    //shadowRadius: 10,
    //shadowColor: 'orange',
    //shadowOffset: { width: 2, height: 6 },
    //shadowOpacity: 0.7,
    backgroundColor: 'white',
    padding: 10,
    height: 260,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  description: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingBottom: 3,
  },
  songTitle: {
    position: 'absolute',
    fontSize: 24,
    paddingLeft: 15,
    marginLeft: 10,
    bottom: 60,
    opacity: .85,
    backgroundColor: 'black',
    color: 'white',
    fontFamily: 'Arial'
  },
  statsBar: {
    flexDirection: 'row',
    paddingTop: 5,
    borderTopColor: 'lightgrey',
    borderTopWidth: 1,
    justifyContent: 'flex-end'
  },
  statsBarIcon: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    // marginHorizontal: 10,
    // padding: 5,
    // borderWidth: 1,
    // borderColor: 'lightgrey',
    // borderRadius: 5,
  },
  songArtist: {
    position: 'absolute',
    fontSize: 16,
    marginLeft: 10,
    paddingLeft: 15,
    bottom: 40,
    opacity: .85,
    backgroundColor: 'black',
    color: 'lightgrey',
    fontFamily: 'Arial'
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  icon: {
    color: 'black',
    marginRight: 10
  },



})

export default FeedItem;
