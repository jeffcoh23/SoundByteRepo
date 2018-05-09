import React from 'react';
import { Image, Modal, Text, View, StyleSheet } from 'react-native';
import { Provider as MobXProvider, observer } from 'mobx-react/native';
import stores from '../stores'
import { Navigation, Stack } from '../nav/Navigation'
import SongControlBar from './SongControlBar'
import SongPlayer from './SongPlayer'
import TheGoodStuff from './TheGoodStuff'

//TODO add MobX store to decide whether to show the Home/FriendList,
// the SearchSongView, the PersonAddView, etc.
@observer
class App extends React.Component {
  render() {
    return (
      <MobXProvider {...stores}>
          <View style={styles.container}>
            <TheGoodStuff />
            {/* <Stack />
            <SongControlBar/> */}
          </View>
    </MobXProvider>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  musicBar: {
    color: 'black',
    height: 300,
    width: 100,
  },
});

export default App;
