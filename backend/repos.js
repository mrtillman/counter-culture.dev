import fetch from 'isomorphic-unfetch';
import SERVERS from '../constants/servers';

export class ClientRepo {

  constructor(access_token){
    this.access_token = access_token;
  }

  addClient(client){
    return new Promise((resolve, reject) => {
      fetch(`${SERVERS.SECURE}/api/v1/clients/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `bearer ${this.access_token}`,
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

export default null;