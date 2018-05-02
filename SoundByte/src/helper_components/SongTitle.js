import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SongTitle = (props) => {
  return <Text style={styles.songTitle}>{props.name}</Text>;
};

const styles = StyleSheet.create({
  songTitle: {
    fontSize: 16,
    color: 'black'
  }
});

export default SongTitle;
