import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';

class Settings extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View
        animationType={"slide"}
        style={{ flex: .5, flexDirection: 'column', justifyContent: 'flex-end' }}
      >
        <Modal
          style={{
            height: 50,
            width: '100%',
            // backgroundColor: '#fff',
            justifyContent: 'center'
          }}
        >
          <Text>Testing a modal with transparent background</Text>
        </Modal>
      </View>
    );
  }
}

export default Settings;
