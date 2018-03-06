import { observable, action, computed } from 'mobx'
import React from 'react'
import Playlist from '../components/Playlist'
import FriendList from '../components/FriendList'
import SongList from '../components/SongList'
import SongView from '../components/SongView'

var base64 = require('base-64');

class Store {
  @observable navState = '';
  @observable songQuery = '';
  @observable songList = [];
  @observable playlistUser = '';
  @observable playlistIdArray = [];

  @computed get MainComp(){
    switch (this.navState) {
      case 'SongList':
        return <SongList/>
      case 'FriendList':
        return <FriendList/>
      case 'SongView':
        return <SongView/>
      default:
        return <Playlist/>
    }
  }

  @computed get getNavState(){
    return this.navState
  }

  @computed get getPlaylistUser(){
    return this.playlistUser
  }

  @computed get playlistIdArray(){
    return this.playlistIdArray;
  }

  @computed get getSongList(){
    return this.songList
  }

  @action changePlaylistUser = (user) => {
    this.playlistUser = user
  }

  @action changeNavState = (state) => {
    this.navState = state
  }

  @action addToPlaylistIdArray = (songId) => {
    this.playlistIdArray.push(songId);
  }

  @action searchSong = (searchText) => {
    let acc_token = ''
    const acc_code = base64.encode('28af7195311747a1ba3670cd8dbeed1a:60e0b243384b43d0a68dde471b620da1')
    fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      body: "grant_type=client_credentials",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept':'application/json',
        'Authorization': `Basic ${acc_code}`,
      },
    }).then(response => response.json()).then(responseJson => {
      fetch(`https://api.spotify.com/v1/search?q=${searchText}&type=track&limit=20`, {
        headers: {
          Accept: "application/json",
          'Content-Type': 'application/json',
          Authorization: `Bearer ${responseJson.access_token}`
        },
      }).then(res => {
        this.songList = JSON.parse(res._bodyText).tracks.items.slice()
      })
    })
  }
}

const store = new Store()
export default store
