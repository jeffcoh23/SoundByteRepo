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
import Dimensions from 'Dimensions';

const DEVICE_WIDTH = Dimensions.get('window').width;

export default class LikeList extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Likes',
    tabBarIcon: ({ white }) =>
      <Icon name={'save'} size={35} style={{ color: 'white' }} />
  };

  showList = () => {
    if (this.props.Store.getSongList){
      return(
        <FlatList
          data={this.props.Store.getSongList}
          renderItem={ ({ item }) =>
            <SongItem item={item}/>
         }
         keyExtractor={(item, index) => index}
        />
      )
    }
    else{
      return (
        <Text>
          hi
        </Text>
      )
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <View  style={styles.topNav}>

        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topNav: {
    width: DEVICE_WIDTH,
    height: 200,
    backgroundColor: 'black'
  }
})
