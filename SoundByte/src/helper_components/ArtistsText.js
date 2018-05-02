import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ArtistsText = props => {
  return (
    <Text style={styles.songArtist}>
      {props.artists}
    </Text>
  );
};

const styles = StyleSheet.create({
  songArtist: {
    fontSize: 14,
    color: 'lightgrey',
    flexWrap: 'wrap'
  }
});

export default ArtistsText;
