const express = require("express");
const app = express();

const Mongostore = require("connect-mongo");

const { connect, set } = require("mongoose");

const path = require("path");

const db = require('./config/mongoose');

const passport = require("passport");

const routes = require('./routes');

const cors=require("cors");

const passportLocal = require("./config/passport-local-strategy");

const passport_jwt = require("./config/passport-jwt");

const passport_google = require('./config/passport-google-oauth20');

const MongoStore = require("connect-mongo");

const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

const corsOptions = {
  origin: 'http://localhost:3000', // 
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions)) 

const session = require('express-session');

app.use(session({
  name:'Login Cookie',
  secret:"pMzDrm9pVseg9j7uA4sC8PFJW6rJGkDX",
  saveUninitialized:false,
  resave:false,
  cookie:{
      maxAge:(1000 * 60 * 100)
  },
  store: MongoStore.create({
      mongoUrl :"mongodb://localhost:27017/mydatabase",
      autoRemove:'enabled'
  })
}));

app.use(passport.initialize());
app.use(passport.session());

const port = "8000";

app.use('/', routes );

app.listen(port, function (err) {
  if (err) {
    console.log(`error in running the server ${err}`);
  }
  console.log(`server is running the port ${port}`);
});
