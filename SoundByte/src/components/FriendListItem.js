import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Dimensions from 'Dimensions';

const DEVICE_WIDTH = Dimensions.get('window').width;

const FriendListItem = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.profilePic} source={{uri: 'https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.2.0/screenshots/ios/list-avatar.png'}}/>
      <View style={styles.friendBox}>
        <Text style={styles.name}>{props.users.username}</Text>
        <Text style={styles.length}>{Math.floor(Math.random() * 100)} Tracks</Text>
        {/* <View style={styles.addButton}>
          <Icon name={'person-add'} color={props.users.friend ? 'green' : 'black'} size={25}/>
        </View> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'orange',
    height: 80,
    flexDirection: 'row'
  },
  friendBox: {
    justifyContent: 'center',
    marginLeft: 20,
  },
  name: {
    width: DEVICE_WIDTH - 10,
    fontSize: 22
  },
  profilePic: {
    height: 60,
    width: 60,
    margin: 10,
    borderRadius: 30,
  },
  length: {
    color: 'lightgrey',
    fontSize: 14,
    marginTop: 5,
  },
  addButton: {
    flex: 1,
    paddingRight: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },

})

export default FriendListItem
