import React from 'react'
import { FlatList, Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { inject, observer } from 'mobx-react'
import SongItem from './SongItem'
import { Container, Header, Item, Input, Button } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

@inject('Store')
@observer
class SongList extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Search',
    header: true,
    title: 'Search',
    tabBarIcon: ({ white }) =>
      <Icon name={'search'} size={35} style={{ color: 'white' }} />
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
    return (
      <View style={{flex: 1}}>
        <View style={{flex: .1, paddingBottom: 10}}>
          <Container>
            <Header searchBar rounded>
              <Item>
                <Icon name="search" />
                <Input placeholder="Search anything" onChangeText={searchText => this.props.Store.searchSong(searchText)}/>
                <Icon name="ios-people" />
              </Item>
              <Button transparent>
                <Text>Search</Text>
              </Button>
            </Header>
          </Container>
        </View>
        <View style={{flex: 1}}>
        {this.showList()}
        </View>
      </View>
    )
  }
}

export default SongList
