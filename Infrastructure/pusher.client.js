const Pusher = require("pusher-js");

class PusherClient {
  constructor() {
    this.channel = null;
    this.self = new Pusher(process.env.PUSHER_KEY, {
      cluster: process.env.PUSHER_CLUSTER,
    });
  }
  subscribe(emailHash, handler) {
    this.channel = this.self.subscribe(emailHash);
    this.channel.bind("update-event", handler);
  }
}

module.exports = PusherClient;
