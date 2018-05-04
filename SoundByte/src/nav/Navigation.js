import { StackNavigator, TabNavigator } from 'react-navigation';
import FriendList from '../components/FriendList';
import SongList from '../components/SongList';
import SongFeed from '../components/SongFeed';
import LikeList from '../components/LikeList';
import SongPlayer from '../components/SongPlayer';
import SongControlBar from '../components/SongControlBar';
import Settings from '../components/Settings';

const Navigation = TabNavigator(
  {
    SongFeed: { screen: SongFeed },
    SongList: { screen: SongList },
    FriendList: { screen: FriendList },
    LikeList: { screen: LikeList },
  },
  {
    tabBarOptions: {
      flex: 1,
      activeTintColor: 'lightblue',
      inactiveTintColor: 'white',
      swipeEnabled: true,
      showLabel: true,
      style: {
        backgroundColor: 'black'
      }
    }
  }
);

// export const SettingsStack = StackNavigator(
//   {
//     Settings: { screen: Settings }
//   },
//   {
//     mode: 'modal',
//     headerMode: 'none',
//     header:
//     cardStyle:{
//       backgroundColor:"transparent",
//       opacity:0.99
//     }
//   })

export const Stack = StackNavigator({
  Navigation: { screen: Navigation },
  SongPlayer: { screen: SongPlayer },
  Settings: { screen: Settings },
}, {
    initialRouteName: 'Navigation',
})
