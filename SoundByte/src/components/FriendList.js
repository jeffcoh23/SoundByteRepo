import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import FriendListItem from './FriendListItem'
import data from '../data/sample_people_data.json'
import { inject, observer } from 'mobx-react';
import Icon from 'react-native-vector-icons/MaterialIcons';


@observer
class FriendList extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Search',
    tabBarIcon: ({ white }) =>
      <Icon name={'person-add'} size={35} style={{ color: 'white' }} />
  };
  render = () => {
    return (
      <FlatList
        data={data}
        renderItem={ ({item}) =>
          <FriendListItem key={item.id} users={item}/>
        }
        keyExtractor={(item, index) => index}
      />
    )
  }
}

export default FriendList;
