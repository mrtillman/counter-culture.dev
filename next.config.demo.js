module.exports = {
  serverRuntimeConfig: { // Will only be available on the server side
    // key: 'value'
  },
  publicRuntimeConfig: { // Will be available on both server and client
    staticFolder: '/static',
  },
  env:{
    'DEV_ENV': true,
  }
}