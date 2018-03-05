import React from 'react';
import { FlatList, Text } from 'react-native'
import PlaylistItem from './PlaylistItem'

const data = [
  {
    name: 'Jeff Cohen',
    playlistLength: '90 seconds',
  },
  {
    name: 'Peter Cohen',
    playlistLength: '60 seconds'
  }

]

class Playlist extends React.Component {
  render = () => {
    return (
      <FlatList
        data={data}
        renderItem={ ({item}) =>
          <PlaylistItem key={item.id} users={item}/>
        }
        keyExtractor={(item, index) => index}

      />
    )
  }
}

export default Playlist;
