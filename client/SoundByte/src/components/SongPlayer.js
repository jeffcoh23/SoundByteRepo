import React from 'react';
import { View, Text, ScrollView, StyleSheet, ListView } from 'react-native';
import {
    Player,
    MediaStates
} from 'react-native-audio-toolkit';

class SongPlayer extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    console.log(JSON.stringify(this.props.song))
    let player = new Player("https://p.scdn.co/mp3-preview/b51d0ed637d2e5cb3eb27565cce9a06f95599077").prepare()
    player.play()
  }


  render(){
    return (
      <Text>
        hi
      </Text>
      // player.prepare((err) => {
      //   });
      //   player.play(() => {
      //   });
    )
  }
}

export default SongPlayer
