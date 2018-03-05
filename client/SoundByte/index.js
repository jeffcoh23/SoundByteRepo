import React from 'react'
import { AppRegistry } from 'react-native';
import App from './src/components/App';
import Store from './src/stores/Store'
import { Provider as MobXProvider, observer } from 'mobx-react/native';

AppRegistry.registerComponent('SoundByte', () => App);
