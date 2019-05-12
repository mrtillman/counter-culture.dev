import fetch from 'isomorphic-unfetch';

const endpoint = "http://localhost:5000/api/v1/oauth/register"

export default class Backend {
  static RegisterClient(client){
    return new Promise((resolve, reject) => {
      fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
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