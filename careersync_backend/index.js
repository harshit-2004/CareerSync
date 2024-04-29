const express = require("express");
const app = express();

const Mongostore = require("connect-mongo");

const { connect, set } = require("mongoose");

const path = require("path");
const db = require('./config/mongoose');
const passport = require("passport");
const routes = require('./routes');
const passportLocal = require("./config/passport-local-strategy");
const passport_jwt = require("./config/passport-jwt");
const passport_google = require('./config/passport-google-oauth20');
const MongoStore = require("connect-mongo");
const bodyParser = require("body-parser")
var cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const config = require('./config/config');

app.use((req, res, next) => {
  // console.log(req.headers);
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Request-Method', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  return next();
})


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressSession({
  secret:config.passport_jwt
}));
app.use(cookieParser(config.passport_jwt));

app.use(passport.initialize());

const port = "8000";

app.use('/', routes );

app.listen(port, function (err) {
  if (err) {
    console.log(`error in running the server ${err}`);
  }
  console.log(`server is running the port ${port}`);
});
