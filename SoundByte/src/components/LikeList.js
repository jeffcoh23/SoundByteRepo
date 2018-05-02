import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { inject, observer } from 'mobx-react'
import Dimensions from 'Dimensions';
import LikeItem from './LikeItem'
import Settings from './Settings'

const DEVICE_WIDTH = Dimensions.get('window').width;

@inject('Store')
@observer
export default class LikeList extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Me',
    title: 'Current User Name',
    tabBarIcon: ({ white }) =>
      <MaterialIcon name={'person'} size={35} style={{ color: 'white' }} />
  };

  showList = () => {
    if (this.props.Store.getSongList){
      return(
        <FlatList
          data={this.props.Store.getSongList}
          renderItem={ ({ item }) =>
            <LikeItem item={item}/>
         }
         keyExtractor={(item, index) => index}
        />
      )
    }
    else{
      return (
        <Text>
          NOTHING TO SEE HERE FOLKS
        </Text>
      )
    }
  }

  goToSettings = () => {
    return <Settings style={{ zIndex: 1 }} />
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.topNav}>
          <TouchableOpacity onPress={this.goToSettings} style={styles.settings}>
            <MaterialIcon name={'settings'} size={35} style={{ color: 'lightgrey' }}/>
          </TouchableOpacity>
          <Image style={styles.profilePic} source={{ uri: 'https://media-public.fcbarcelona.com/20157/0/document_thumbnail/20197/11/31/187/45817611/1.0-10/45817611.jpg?t=1493315026000'}}/>
          <View style={styles.text}>
            <Text>
              <Text style={styles.number}>280 </Text>
              <Text style={styles.stats}>Likes</Text>
            </Text>
            <Text>
              <Text style={styles.number}>90 </Text>
              <Text style={styles.stats}>Followers</Text>
            </Text>
            <Text>
              <Text style={styles.number}>110 </Text>
              <Text style={styles.stats}>Following</Text>
            </Text>
          </View>
        </View>
        <View style={{flex: 1}}>
          {this.showList()}
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  number: {
    color: 'lightblue',
    fontWeight: 'bold',
    fontSize: 16,
  },
  stats: {
    fontSize: 16
  },
  text: {
    flexDirection: 'row',
    flex: 1,
    width: DEVICE_WIDTH,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
  },
  profilePic: {
    height: 160,
    width: 120,
    borderRadius: 60,
    marginTop: 40,
    marginBottom: 20
  },
  topNav: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderColor: 'lightgrey',

  },
  settings: {
    position: 'absolute',
    top: 10,
    left: 10,
  }
})
