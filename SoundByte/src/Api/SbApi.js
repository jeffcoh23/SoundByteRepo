// import Promise from 'bluebird';
// import reqwest from 'reqwest';

import React from 'react';
import { inject, observer } from 'mobx-react';

import Store from '../stores/Store'

@inject('Store')
@observer
class SbApi {
  constructor(headers = {}){
    // X-User-Token
    // X-User-Email
    this.headers = headers;
  }

  createSession(url, data = {}){
    fetch(url, {
      method: 'POST',
      headers: {
        'X-User-Token': `${data.token}`,
        'X-User-Email': `${data.email}`
      },
    }).then(response => response.json())
  }

  // createUser(url) {
  //   return new Promise((resolve, reject) => {
  //     reqwest({
  //       url,
  //       type: 'json',
  //       method: 'get',
  //       success(response) {
  //         resolve(response);
  //       },
  //       error(response) {
  //         const error = new EXOApiError(response);
  //         reject(error);
  //       },
  //     });
  //   });
  // }
}

export default SbApi
