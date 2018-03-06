import React from 'react';
import { View, Text, ScrollView, StyleSheet, ListView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StoryCard from './StoryCard';
import { inject, observer } from 'mobx-react';
import SongPlayer from './SongPlayer'
@inject('Store')
@observer
class SongFeed extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      song: null,
    };
  }
  static navigationOptions = {
    tabBarLabel: 'Feed',
    tabBarIcon: ({ white }) => (
      <Icon name={'home'} size={45} style={{ color: 'white' }} />
    )
  };

  handleSongClick = (song) => {
    this.setState({
      song,
    })
  };


  mapStoryCards = () => {
    if (this.state.song) {
      return <SongPlayer song={this.state.song}/>
    }
    return this.props.Store.getSongList.map(song => {
      return <StoryCard key={song.id} item={song} onSelectSong={() => this.handleSongClick(song)}/>
      });
  }

  render() {
    return (
      <ScrollView>
        {this.mapStoryCards()}
      </ScrollView>

    )
  }
}


export default SongFeed;
