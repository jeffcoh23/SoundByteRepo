import { StackNavigator, TabNavigator } from 'react-navigation';
import FriendList from '../components/FriendList';
import SongList from '../components/SongList';
import SongFeed from '../components/SongFeed';
import LikeList from '../components/LikeList';
import SongPlayer from '../components/SongPlayer';


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
      activeTintColor: 'orange',
      inactiveTintColor: 'white',
      swipeEnabled: true,
      showLabel: true,
      style: {
        backgroundColor: 'black'
      }
    }
  }
);

export const Stack = StackNavigator({
  Navigation: { screen: Navigation },
  SongFeed: { screen: SongFeed },
  SongPlayer: { screen: SongPlayer }
}, {
    initialRouteName: 'Navigation',
})
