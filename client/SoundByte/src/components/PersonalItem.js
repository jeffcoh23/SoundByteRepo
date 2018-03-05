import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';

const DEVICE_WIDTH = Dimensions.get('window').width;

const PersonalItem = () => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}> Your shit, man </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: DEVICE_WIDTH - 20,
    alignItems: 'center',
    borderWidth: 4,
    borderColor: 'black'
  },
  text: {
    fontSize: 24,
  }
});

export default PersonalItem;
