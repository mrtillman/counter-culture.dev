import fetch from 'isomorphic-unfetch';
import SERVERS from '../constants/servers';

export default class Backend {
  static RegisterClient(client){
    return new Promise((resolve, reject) => {
      fetch(`${SERVERS.SECURE}/api/v1/oauth2/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // TODO: supply geek site token
          // 'Authorization': `bearer ${this.access_token}`,
        },
        body: JSON.stringify(client)
      })
      .then(res => {
        if(res.ok){
          return res.json();
        }
        reject(res.statusText);
      })
      .then(client => resolve(client))
      .catch(console.log);
    })
  }
}