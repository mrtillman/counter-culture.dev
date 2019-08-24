export default class Utils {
  static getQueryParam(key) {
    const urlParams = new URLSearchParams(window.location.search); 
    return urlParams.get(key);
  }
  static getHashParam(key) {
    const rawParams = window.location.hash.replace("#","?");
    const urlParams = new URLSearchParams(rawParams); 
    return urlParams.get(key);
  }
}