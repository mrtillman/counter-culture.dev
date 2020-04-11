require('dotenv').config();
const express = require('express');
const http = require('http');
const app = express();
const next = require('next');

// workaround for dev container
// see https://github.com/zeit/next.js/issues/4022
const dev = Boolean(process.env.DEV_ENV);

const nx = next({ dev });
const handle = nx.getRequestHandler();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const SERVERS = require('./constants/servers');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

var passport = require('passport')
  , OAuth2Strategy = require('passport-openidconnect').Strategy;

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new OAuth2Strategy({
    issuer: `${SERVERS.SECURE}`,
    userInfoURL: `${SERVERS.SECURE}/connect/userinfo`,
    authorizationURL: `${SERVERS.SECURE}/connect/authorize`,
    tokenURL: `${SERVERS.SECURE}/connect/token`,
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: `${SERVERS.DEV}/oauth2/callback`,
    scope: "openid profile offline_access",
  },
  function(issuer, sub, profile, jwtClaims, accessToken, refereshToken, tokenResponse, done) {
    profile.token = accessToken;
    return done(null, profile);
  }
));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cookieSession({
  name: 'session',
  keys: ['superSecretKey'],
  httpOnly: false,
  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.use(passport.initialize());
app.use(passport.session());

nx.prepare().then(() => {

  const port = process.env.PORT || 9000;

  app.get('/oauth2/callback',
    passport.authenticate('openidconnect', { failureRedirect: '/' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/?logged_in=true');
    });

  app.post('/user/profile', (req, res) => {
    res.json(req.user);
    });

  app.get('/register',
    ensureLoggedIn('/'),
    function(req, res){
      return handle(req, res);
    })

  app.post('/user/logout', (req, res) => {
    req.logout();
    res.end();
  });  

  app.get('/*', (req, res) => {
    return handle(req, res);
  })

  http.createServer(app).listen(port, function () {
    console.log(`magic is happening on port ${port}`);
  });

});