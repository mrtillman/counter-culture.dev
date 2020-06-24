module.exports = {
  env: {
    'AMQP_URI': 'amqp://localhost:5672',
    'DEV_ENV': true,
    'CLIENT_ID': '{CLIENT_ID}',
    'CLIENT_SECRET': '{CLIENT_SECRET}',
    'GA_TRACKING_CODE': 'XX-000000000-0',
    'MONGO_URI': 'mongodb://localhost:27017/avbx',
    'PUSHER_KEY': '11111112222222333333',
    'PUSHER_CLUSTER': 'xx1',
    'REDIS_URI': 'redis://localhost:6379',
    'SANITY': true,
    'SENTRY_DSN': 'https://000@111.ingest.sentry.io/222',
    'SESSION_KEY': 'dont-make-a-sound',
  }
}