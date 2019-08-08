import fetch from 'isomorphic-unfetch';
import SERVERS from '../constants/servers';

export default class Backend {
  
  constructor(access_token){
    this.access_token = access_token
  }

  RegisterClient(client){
    console.log(client);
    // return new Promise((resolve, reject) => {
    //   fetch(`${SERVERS.SECURE}/api/v1/oauth2/register`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': `bearer ${this.access_token}`,
    //     },
    //     body: JSON.stringify(client)
    //   })
    //   .then(res => {
    //     if(res.ok){
    //       return res.json();
    //     }
    //     reject(res.statusText);
    //   })
    //   .then(client => resolve(client))
    //   .catch(console.log);
    // })

  }

}