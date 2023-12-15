const express = require("express");
const app = express();
const router = express.Router(app);

const Mongostore = require("connect-mongo");

const { connect, set } = require("mongoose");

const path = require("path");

const db = require("./config/mongoose");

const passport = require("passport");

const MongoStore = require("connect-mongo");

const port = "8000";

router.use('/', require("routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(`error in running the server ${err}`);
  }
  console.log(`server is running the port ${port}`);
});
