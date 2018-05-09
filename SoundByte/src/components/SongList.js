import React from 'react'
import { FlatList, TextInput, Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { inject, observer } from 'mobx-react'
import SongItem from './SongItem'
import { Container, Icon, Header, Item, Input, Button } from 'native-base';
import Dimensions from 'Dimensions';
import data from '../data/sample_people_data.json'
import AddFriendItem from './AddFriendItem'
import SbApiRoutes from '../Api/SbApiRoutes'
const ApiRoutes = new SbApiRoutes();
const DEVICE_WIDTH = Dimensions.get('window').width;

@inject('PlaylistItem')
@inject('Store')

@observer
class SongList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedTab: 'tracks'
    }
  }
  static navigationOptions = {
    tabBarLabel: 'Search',
    title: 'Search',
    tabBarIcon: ({ white }) =>
      <Icon name={'md-search'} size={35} style={{ color: 'white' }} />
  };

  showContent = () => {
    if (this.state.selectedTab === 'people') {
      return this.showPeople()
    }
    else if (this.state.selectedTab === 'tracks') {
      return this.showList()
    }
  }

  switchToPeople = () => {
    this.setState({ selectedTab: 'people' })
  }

  switchToTracks = () => {
    this.setState({ selectedTab: 'tracks' })
  }

  showPeople = () => {
    if (data){
      return(
        <FlatList
          data={data}
          renderItem={ ({ item }) =>
            <AddFriendItem key={item.id} user={item}/>
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

  handleLike = (e) => {
    cosole.log('yoo')
    debugger
  }

  handleAddSong = (song) => {
    artists = song.artists.map(artist => artist.name).join(', ')
    let data = { song: { service_name: 'Spotify', song_title: song.name, preview_url: song.preview_url, artists: artists, track_uid: song.id, image_url: song.album.images[0].url } }
    this.props.PlaylistItem.add(data)
  }

  showList = () => {
    if (this.props.Store.getSongList){
      return(
        <FlatList
          data={this.props.Store.getSongList}
          renderItem={ ({ item }) =>
            <SongItem addSong handleAddSong={() => this.handleAddSong(item)} handleLike={this.handleLike} buttonType="play" item={item}/>
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
    return (
      <View style={{flex: 1}}>
        <TextInput style={styles.searchBar} placeholder="Search anything" onChangeText={searchText => this.props.Store.searchSong(searchText)}/>
        <View style={styles.contentBar}>
          <TouchableOpacity onPress={this.switchToPeople} style={this.state.selectedTab === 'people' ? styles.activeTab : styles.regularTab}>
            <Text style={this.state.selectedTab === 'people' ? styles.selectedTabText : styles.regularTabText}>People</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.switchToTracks} style={this.state.selectedTab === 'tracks' ? styles.activeTab : styles.regularTab}>
            <Text style={this.state.selectedTab === 'tracks' ? styles.selectedTabText : styles.regularTabText}>Tracks</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.switchToPeople} style={this.state.selectedTab === 'albums' ? styles.activeTab : styles.regularTab}>
            <Text style={this.state.selectedTab === 'albums' ? styles.selectedTabText : styles.regularTabText}>Albums</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={this.switchToPeople} style={this.state.selectedTab === 'people' ? styles.activeTab : styles.regularTab}>
            <Text style={this.state.selectedTab === 'people' ? styles.selectedTabText : styles.regularTabText}>People</Text>
          </TouchableOpacity> */}
        </View>
        <View style={{flex: 1}}>
        {this.showContent()}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  contentBar: {
    height: 40,
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderColor: 'lightgrey',
    borderBottomWidth: 1,
    marginBottom: 3,
  },
  searchBar: {
    paddingLeft: 15,
    fontSize: 16,
    borderRightWidth: 30,
    borderLeftWidth: 30,
    flex: .08,
    borderWidth: 10,
    borderColor: '#E4E4E4',
  },
  activeTab: {
    paddingHorizontal: 10,
    borderBottomWidth: 3,
    borderColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  regularTab: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedTabText: {
    paddingVertical: 5,
    flex: 1,
    color: 'lightblue',
    fontFamily: 'System',
    fontSize: 20
  },
  regularTabText: {
    fontFamily: 'System',
    paddingVertical: 5,
    flex: 1,
    fontSize: 20
  }
})

export default SongList
