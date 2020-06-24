const SERVERS = require("../../Common/servers");

var passport = require("passport"),
  OAuth2Strategy = require("passport-openidconnect").Strategy;

module.exports = function configurePassport(app) {
  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (user, done) {
    done(null, user);
  });

  passport.use(
    new OAuth2Strategy(
      {
        issuer: `${SERVERS.SECURE}`,
        userInfoURL: `${SERVERS.SECURE}/connect/userinfo`,
        authorizationURL: `${SERVERS.SECURE}/connect/authorize`,
        tokenURL: `${SERVERS.SECURE}/connect/token`,
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: `${SERVERS.APP}/oauth2/callback`,
        scope: "openid profile offline_access",
      },
      function (
        issuer,
        sub,
        profile,
        jwtClaims,
        accessToken,
        refereshToken,
        tokenResponse,
        done
      ) {
        profile.token = accessToken;
        return done(null, profile);
      }
    )
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.get(
    "/oauth2/callback",
    passport.authenticate("openidconnect", { failureRedirect: "/" }),
    function (req, res) {
      // Successful authentication, redirect home.
      res.redirect("/?logged_in=true");
    }
  );
};
