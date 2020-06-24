require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const app = express();
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");

const homeRoute = require("./routes/home");
const cspConfig = require("./public/csp-config.json");

const morgan = require("morgan");
const errorHandler = require("./middleware/error-handler");
const crashReporterScope = require("./middleware/crash-reporter-scope");
const configurePassport = require("./middleware/configure-passport");

//const isOnline = require("./middleware/is-online");
const isAjax = require("./middleware/is-ajax");

// workaround for dev container
// see https://github.com/zeit/next.js/issues/4022
const dev = !!process.env.DEV_ENV;

app.use(helmet(cspConfig));

app.use(
  cookieSession({
    name: "session",
    keys: [process.env.SESSION_KEY],
    httpOnly: !dev,
  })
);

app.use(morgan("tiny"));

configurePassport(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set("views", "./Presentation/views");
app.set("view engine", "pug");

//app.use(isOnline);
app.use(crashReporterScope);
app.use(isAjax);

app.use("/home", homeRoute);

let _handler = (req, res) => {
  return res.status(200).end();
};

const setHandler = (handler) => {
  _handler = handler;
};

app.get("/*", (req, res) => {
  return _handler(req, res);
});

app.use(errorHandler);

module.exports = {
  app,
  setHandler,
};
