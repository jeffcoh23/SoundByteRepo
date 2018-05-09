import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

class FriendListItem extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
  }

  handlePress = () => {
    // use this.props.item.id
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.songContainer}>
          <Image style={styles.albumCover} source={{ uri: this.props.user.profile_picture }}/>
          <View style={styles.songDescriptionView}>
            <Text style={styles.songTitle}>{this.props.user.user_name}</Text>
            <Text style={styles.songCount}>{this.props.user.song_count} songs</Text>
          </View>
        </View>
        {/* <TouchableOpacity style={styles.playButton} onPress={this.props.handlePlayButton}>
          <SimpleLineIcons style={{color: 'lightgrey'}} name={'control-play'} size={30} />
        </TouchableOpacity> */}
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
  playButton: {
    alignSelf: 'center',
    marginHorizontal: 10,
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
  songCount: {
    fontSize: 14,
    color: 'lightgrey',
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
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
})

export default FriendListItem
