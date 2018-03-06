import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

class SongItem extends React.Component {
  constructor(props){
    super(props)
  }

  handlePress = (songId) => {
  }

  render() {
   return (
     <ListItem>
       <Thumbnail square size={80} source={{ uri: this.props.item.album.images[0].url }} />
       <Body>
         <Text>{this.props.item.name}</Text>
         <Text note>I{this.props.item.artists.map(artist => artist.name).join(', ')}</Text>
       </Body>
       <TouchableOpacity style={styles.addButton}>
         <Icon name={'add-circle-outline'} size={35} style={{ color: 'black'}} />
      </TouchableOpacity>
     </ListItem>
   );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 2,
    borderColor: 'lightgrey',
    paddingTop: 7,
    height: 50,
  },
  songBox: {
    paddingLeft: 15,
    flexDirection: 'row'
  },
  songTitle: {

  },

  artist: {
    justifyContent: 'flex-end',
    flexDirection: 'column'
  },

  albumCover: {
  },

  addButton: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 15,
    flex: .2
  },

})

export default SongItem
