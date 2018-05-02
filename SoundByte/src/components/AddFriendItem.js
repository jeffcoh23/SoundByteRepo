import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class AddFriendItem extends React.Component {
  constructor(props){
    super(props)
  }

  handlePress = () => {
    // use this.props.item.id
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.songContainer}>
          <Image style={styles.albumCover} source={{ uri: this.props.user.profilePic }}/>
          <View style={styles.songDescriptionView}>
            <Text style={styles.songTitle}>{this.props.user.username}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.addFriend} onPress={this.props.handlePlayButton}>
          <Text style={styles.addFriendText}> Add Friend </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: 'lightgrey',
    paddingVertical: 10,
    justifyContent: 'space-between',
    paddingLeft: 10,
  },
  songContainer: {
    flex: .7,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
  },
  addFriend: {
    alignSelf: 'center',
    borderWidth: 1,
    marginHorizontal: 10,
    borderColor: 'lightgrey',
    borderRadius: 10,
    height: 30,
  },
  addFriendText: {
    fontSize: 14,
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: 'lightgrey',
  },
  songTitle: {
    fontSize: 16,
    color: 'black',
  },
  songArtist: {
    fontSize: 14,
    color: 'lightgrey',
    flexWrap: 'wrap',
  },
  songBox: {
    paddingLeft: 15,
    flexDirection: 'row'
  },
  songDescriptionView: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  artist: {
    justifyContent: 'flex-end',
    flexDirection: 'column'
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 15,
    flex: .2
  },
  albumCover: {
    width: 60,
    height: 60,
    marginRight: 8,
  },
})

export default AddFriendItem
