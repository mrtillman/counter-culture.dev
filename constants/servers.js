
let API = 'https://api.counter-culture.io';
let DEV = 'https://geeks.counter-culture.io';
let SECURE = 'https://secure.counter-culture.io';

if (process.env.NODE_ENV !== 'production') {
  API = 'http://counter-culture:4000';
  DEV = 'http://counter-culture:9000';
  SECURE = 'http://counter-culture:5000';
}

const GRAPHQL = `${API}/graphql`;

module.exports = Object.freeze({
  API, DEV, SECURE, GRAPHQL
});