let API = 'https://api.counter-culture.io';
let SECURE = 'https://secure.counter-culture.io';

if (process.env.NODE_ENV != 'production') {
  API = 'http://127.0.0.1:4000';
  SECURE = 'http://127.0.0.1:5000';
}

const GRAPHQL = `${API}/graphql`;

export default Object.freeze({
  API, SECURE, GRAPHQL
});