import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import Header from './Header';
import Playlist from './Playlist'
import MyStory from './MyStory'
import FriendList from './FriendList'
import { Provider as MobXProvider, observer } from 'mobx-react/native';
import Store from '../stores/Store'
import MainNav from '../nav/MainNav'
import { Navigation, Stack } from '../nav/Navigation'
import SongView from './SongView'


//TODO add MobX store to decide whether to show the Home/FriendList,
// the SearchSongView, the PersonAddView, etc.
@observer
class App extends React.Component {
  render() {
    return (
      <MobXProvider Store={Store}>
          <View style={styles.container}>
            <Stack />
          </View>
    </MobXProvider>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 0.5,
  }
});

export default App;
