import React from 'react';
import { Image, Modal, Text, View, StyleSheet } from 'react-native';
import { Provider as MobXProvider, observer } from 'mobx-react/native';
import Store from '../stores/Store'
import { Navigation, Stack } from '../nav/Navigation'
import SongControlBar from './SongControlBar'
import SongPlayer from './SongPlayer'


//TODO add MobX store to decide whether to show the Home/FriendList,
// the SearchSongView, the PersonAddView, etc.
@observer
class App extends React.Component {
  render() {
    return (
      <MobXProvider Store={Store}>
          <View style={styles.container}>
            <Stack />
              {/* <Modal animationType="slide" visible={true} style={{height: 200}}>
                //<SongPlayer  />
              </Modal> */}
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
