import { observable, action, computed } from 'mobx';
import React from 'react';
import data from './../data/sample_song_data';
import { AsyncStorage } from 'react-native';

var base64 = require('base-64');

class Store {
  @observable navState = '';
  @observable songQuery = '';
  //@observable songList = [];
  @observable songList = data;
  @observable playlistUser = '';
  @observable playlistIdArray = [];

  // Auth
  @observable loggedIn = false;
  @observable authToken = 'NTF355z2xt-fVBg6RQtP';
  @observable email = 'jeffcoh23@gmail.com';

  @computed
  get getNavState() {
    return this.navState;
  }

  @computed
  get getPlaylistUser() {
    return this.playlistUser;
  }

  @computed
  get playlistIdArray() {
    return this.playlistIdArray;
  }

  @computed
  get getSongList() {
    return this.songList;
  }

  @action
  changePlaylistUser = user => {
    this.playlistUser = user;
  };

  @action
  changeNavState = state => {
    this.navState = state;
  };

  @action
  addToPlaylistIdArray = songId => {
    this.playlistIdArray.push(songId);
  };

  @action
  assignAuth = response => {
    this.auth = response;
  };

  async fetchAPI(url, method) {
    let response = await fetch(url, {
      method: method,
      headers: {
        'X-User-Token': `${this.authToken}`,
        'X-User-Email': `${this.email}`
      }
    });
    let responseJson = await response.json();
    return responseJson;
  }

  @action
  login = (url, data = {}) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'X-User-Token': `${data.token}`,
        'X-User-Email': `${data.email}`
      }
    })
      .then(response => response.json())
      .then(data => {
        (this.authToken = data.authentication_token),
          (this.email = data.email),
          (this.loggedIn = true),
          AsyncStorage.setItem(
            'authToken',
            JSON.stringify(data.authentication_token)
          ),
          AsyncStorage.setItem('email', JSON.stringify(data.email));
      })
      .catch(error => console.log(error));
  };

  @action
  createSong = url => {
    this.fetchAPI(url, 'POST');
  };

  @action
  searchSong = searchText => {
    let acc_token = '';
    const acc_code = base64.encode(
      '28af7195311747a1ba3670cd8dbeed1a:60e0b243384b43d0a68dde471b620da1'
    );
    fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      body: 'grant_type=client_credentials',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
        Authorization: `Basic ${acc_code}`
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        fetch(
          `https://api.spotify.com/v1/search?q=${searchText}&type=track&limit=20`,
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${responseJson.access_token}`
            }
          }
        ).then(res => {
          //this.songList = data
          this.songList = JSON.parse(res._bodyText).tracks.items.slice();
          //console.log(JSON.stringify(this.songList))
        });
      });
  };
}

const store = new Store();
export default store;
