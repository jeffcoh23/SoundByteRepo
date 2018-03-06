import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Dimensions from 'Dimensions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';
import { inject, observer } from 'mobx-react'
import { Input } from 'native-base'

@inject('Store')
@observer
class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      addFriendClicked: false,
      addSongClicked: false,
    }
  }

  handleSearchField = () => {
    if (this.state.addFriendClicked){
      return (
      <MKTextField
          //text={this.state.email}
          //onTextChange={email => this.setState({ email })}
          textInputStyle={styles.search}
          placeholder='Search People...'
          tintColor={MKColor.Teal}
        />
      )
    }
    else if ( this.state.addSongClicked){
      return (
      <MKTextField
          text={this.props.Store.query}
          onTextChange={searchText => this.props.Store.searchSong(searchText)}
          textInputStyle={styles.search}
          placeholder="Search Song..."
          tintColor={MKColor.Teal}
        />
      )
    }
    else{
      return null
    }
  }

  handlePersonAddPress = () => {
    this.setState({ addFriendClicked: !this.state.addFriendClicked, addSongClicked: false},
    this.state.addFriendClicked ? this.props.Store.changeNavState(null) : this.props.Store.changeNavState('FriendList'))

  }

  handlePlaylistAddPress = () => {
    this.setState({ addSongClicked: !this.state.addSongClicked, addFriendClicked: false},
    this.state.addSongClicked ? this.props.Store.changeNavState(null) : this.props.Store.changeNavState('SongList'))
  }


  render = () => {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={this.handlePlaylistAddPress}>
          <Icon style={[styles.addSong, this.state.addSongClicked ? {color: 'white'} : null]} name={'playlist-add'} size={50}/>
        </TouchableOpacity>
        {this.handleSearchField()}
          <TouchableOpacity onPress={this.handlePersonAddPress}>
            <Icon style={[styles.addFriend, this.state.addFriendClicked ? {color: 'white'} : null]} name={'settings'} size={35}/>
          </TouchableOpacity>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "rgba(247,111,10,1)",
    opacity: .9,
    flexDirection: 'row',
    width: DEVICE_WIDTH,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 75,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15

  },
  addSong: {
    justifyContent: 'flex-start',
    marginVertical: 20,
    paddingLeft: 20
  },
  search: {
    height: 40,
    color: MKColor.White,
    backgroundColor: MKColor.White,
    width: 200,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  addFriend: {
    justifyContent: 'flex-end',
    marginVertical: 20,
    paddingRight: 20
  }

});

const DEVICE_WIDTH = Dimensions.get('window').width;

export default Header;
