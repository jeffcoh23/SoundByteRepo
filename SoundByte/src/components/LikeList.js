import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class LikeList extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Likes',
    tabBarIcon: ({ white }) =>
      <Icon name={'save'} size={35} style={{ color: 'white' }} />
  };
  render(){
    return(
      <Text>
        hi
      </Text>
    )
  }
}
