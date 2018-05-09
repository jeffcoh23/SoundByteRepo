import React from 'react';
import { View, Text, ScrollView, StyleSheet, ListView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FeedItem from './FeedItem';
import { inject, observer } from 'mobx-react';
import SongControlBar from './SongControlBar'

@inject('Store')
@inject('Feed')

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
    ),
    // tabBarOnPress: ({ previousScene, scene, jumpToIndex }) => {
    //       this.props.Feed.fetchAll()
    //       const { route, focused, index } = scene;
    //       if (!focused) {
    //         if (route.index > 0) {
    //           const tabRoute = route.routeName;
    //           const { routeName, key } = route.routes[0];
    //           navigation.dispatch(
    //             NavigationActions.navigate({ routeName: tabRoute })
    //           );
    //           navigation.dispatch(
    //             NavigationActions.reset({
    //               index: 0,
    //               key,
    //               actions: [
    //                 NavigationActions.navigate({ routeName })
    //               ]
    //             })
    //           );
    //         } else {
    //           jumpToIndex(index);
    //         }
    //       }
    //     },
  };

  componentDidMount() {
    this.props.Feed.fetchAll()
  }


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
          {this.props.Feed.all.map(this.mapFeedItems)}
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
