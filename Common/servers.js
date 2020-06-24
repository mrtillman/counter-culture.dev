let API = "https://api.counter-culture.io";
let APP = "https://app.counter-culture.io";
let SECURE = "https://secure.counter-culture.io";
let WEB = "https://counter-culture.io";

// workaround for dev container
// see https://github.com/zeit/next.js/issues/4022
const isDev = Boolean(process.env.DEV_ENV);

if (isDev) {
  API = "http://counter-culture:4000";
  APP = "http://counter-culture:9000";
  SECURE = "http://counter-culture:5000";
  WEB = "http://counter-culture:8070";
}

module.exports = Object.freeze({
  API,
  APP,
  SECURE,
  WEB,
});
