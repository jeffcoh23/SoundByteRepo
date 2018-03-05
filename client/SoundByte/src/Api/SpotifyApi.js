import React from 'react'

class SpotifyApi {
  getSongs(){
    const acc_code = btoa('28af7195311747a1ba3670cd8dbeed1a:60e0b243384b43d0a68dde471b620da1')
    fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      body: "grant_type=client_credentials",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept':'application/json',
        'Authorization': `Basic ${acc_code}`,
      },
    }).then(response => response.json()).then(responseJson => {
      return responseJson.access_token
    })
  }
}

export default new SpotifyApi()
