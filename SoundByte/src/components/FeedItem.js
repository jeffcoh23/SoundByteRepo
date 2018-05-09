import React, { Component } from 'react';
import ReactNative, {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import { inject, observer } from 'mobx-react'

@inject('Store')
@inject('Feed')

@observer
class FeedItem extends React.Component {
  constructor(props){
    super(props)
  }

  // componentDidMount() {
  //   debugger
  // }

  showSongView = () => {
    this.props.onSelectSong
  }


  render(){
    return (
      <View onPress={this.props.onSelectSong}
        style={styles.container}
      >
        <View style={styles.box}>
          <View style={{flex: .5, flexDirection: 'row', alignItems: 'center'}}>
            <Image style={styles.profilePic} source={{ uri: this.props.item.image_url }}/>
            <View>
              <Text style={{fontSize: 12}}>{this.props.item.song_owner}</Text>
              <Text style={{fontSize: 12}}>{this.props.item.created_at}</Text>
            </View>
          </View>
          <View style={styles.likeAndPlay}>
            <Text style={{marginRight: 5, color: 'lightgrey'}}>{Math.floor(Math.random() * Math.floor(1000))}</Text>
            <TouchableOpacity style={{marginRight: 20}}>
              <SimpleLineIcons style={{color: 'lightgrey'}} name={'control-play'} size={15} />
            </TouchableOpacity>
            <Text style={{marginRight: 5, color: 'lightgrey'}}>{Math.floor(Math.random() * Math.floor(1000))}</Text>
            <TouchableOpacity>
              <SimpleLineIcons style={{color: 'lightgrey'}} name={'heart'} size={15} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={this.props.onSelectSong} style={{flex: 1}}>
          <View style={{flex: 1}}>
            <Image style={{flex: 1, marginTop: 8}} source={{ uri: this.props.item.image_url }}/>
            <Text numberOfLines={1} style={styles.songTitle}>{this.props.item.song_title}</Text>
            <Text numberOfLines={1} style={styles.songArtist}>{this.props.item.artists}</Text>
          </View>
          {/* <Icon style={styles.statsBarIcon} name={'favorite'} size={35}/> */}

        </TouchableWithoutFeedback>
          {/* <View style={styles.description}>
          </View> */}
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    height: 260,
  },
  likeAndPlay: {
    flex: .5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 8,
  },
  description: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingTop: 5,
    borderTopWidth: 1,
    borderColor: 'lightgrey',
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
  // statsBarIcon: {
  //   position: 'absolute',
  //   right: 20,
  //   bottom: 20,
  //   marginHorizontal: 10,
  //   padding: 5,
  //   borderWidth: 1,
  //   borderColor: 'lightgrey',
  //   borderRadius: 5,
  // },
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
