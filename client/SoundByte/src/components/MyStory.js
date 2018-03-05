import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Dimensions from 'Dimensions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PersonalItem from './PersonalItem'

const DEVICE_WIDTH = Dimensions.get('window').width;


//Todo this sucks
class MyStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownToggle: false
    };
  }

  handleIconClick = (e) => {
    this.setState({ dropdownToggle: !this.state.dropdownToggle })
  }

  renderMyContent = () => {
    if (!this.state.dropdownToggle) { return null }
    else{
      return <PersonalItem/>
    }
  }


  render = () => {
    return (
      <View style={[styles.container, (this.state.dropdownToggle ? {flex: .2} : null) ]}>
        <View style={styles.box}>
          <Text style={styles.myStory}> ---- My Story ---- </Text>
          <TouchableOpacity onPress={this.handleIconClick}>
            <Icon style={styles.menuToggle} name={ this.state.dropdownToggle ? 'expand-less' : 'expand-more'} size={30} />
          </TouchableOpacity>
          {this.renderMyContent()}
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    height: 40,
    width: DEVICE_WIDTH,
  },
  box: {
    alignItems: 'center'
  },
  myStory: {
    color: 'orange',
    fontSize: 25
  },
  menuToggle: {
    paddingRight: 15,
  }
});

export default MyStory;
