
let API = 'https://api.counter-culture.io';
let DEV = 'https://geeks.counter-culture.io';
let SECURE = 'https://secure.counter-culture.io';

// workaround for dev container
// see https://github.com/zeit/next.js/issues/4022
const isDev = Boolean(process.env.DEV_ENV);

if (isDev) {
  API = 'http://counter-culture:4000';
  DEV = 'http://counter-culture:9000';
  SECURE = 'http://counter-culture:5000';
}

const GRAPHQL = `${API}/graphql`;

module.exports = Object.freeze({
  API, DEV, SECURE, GRAPHQL
});