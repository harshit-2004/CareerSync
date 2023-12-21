const express = require("express");
const app = express();

const Mongostore = require("connect-mongo");

const { connect, set } = require("mongoose");

const path = require("path");

const db = require('./config/mongoose');

const passport = require("passport");

const passportLocal = require("./config/passport-local-strategy");

const passport_jwt = require("./config/passport-jwt");

const passport_google = require('./config/passport-google-oauth20');

const MongoStore = require("connect-mongo");

app.use(passport.initialize());

const port = "8000";

app.use('/', require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(`error in running the server ${err}`);
  }
  console.log(`server is running the port ${port}`);
});
