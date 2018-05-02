import React from 'react';
import { View, Text, ScrollView, StyleSheet, ListView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FeedItem from './FeedItem';
import { inject, observer } from 'mobx-react';
import SongControlBar from './SongControlBar'

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
    title: 'Feed',
    tabBarIcon: ({ white }) => (
      <Icon name={'home'} size={35} style={{ color: 'white' }} />
    )
  };

  handleSongClick = (song) => {
    this.setState({ song })
    return this.props.navigation.navigate('SongPlayer', { song: song })
  };

  mapFeedItems = (song) => {
    return <FeedItem key={song.id} item={song} onSelectSong={() => this.handleSongClick(song)}/>
  }

  render() {
    return (
      <View>
        <ScrollView style={styles.container}>
          {this.props.Store.getSongList.map(this.mapFeedItems)}
        </ScrollView>
      </View>


    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgrey',
  },
})


export default SongFeed;
