module.exports = {
  serverRuntimeConfig: { // Will only be available on the server side
    grant_type: 'code',
    client_id: '{{client_id}}',
    client_secret: '{{client_secret}}',
    redirect_uri: 'http://localhost:8080/oauth2/callback'
  },
  publicRuntimeConfig: { // Will be available on both server and client
    staticFolder: '/static'
  }
}