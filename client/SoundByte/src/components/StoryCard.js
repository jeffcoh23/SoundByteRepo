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
class StoryCard extends React.Component {

  showSongView = () => {
    this.props.onSelectSong
  }


  render(){
    return (
      <TouchableOpacity onPress={this.props.onSelectSong}
        style={{
          margin: 10,
          shadowRadius: 10,
          shadowColor: 'orange',
          shadowOffset: { width: 2, height: 6 },
          shadowOpacity: 0.7,
          backgroundColor: 'white',
          padding: 20,
          height: 260,
        }}
      >
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name={'cake'} size={35} style={{ color: 'black', marginRight: 10 }} />
          <Text style={{fontSize: 16}}>jeffcoh23</Text>
        </View>
        <Image style={{flex: 1, marginVertical: 8}} source={{ uri: this.props.item.album.images[0].url }}/>
        <Text style={{fontSize: 16, fontFamily: 'Arial'}}>{this.props.item.name}</Text>
        <Text style={{fontSize: 12, fontFamily: 'Arial'}}>{this.props.item.artists.map(artist => artist.name).join(', ')}</Text>
      </TouchableOpacity>
    );
  };
}

export default StoryCard;
