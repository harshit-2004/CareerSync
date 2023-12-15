const mongoose =require('mongoose');

const config = require('./config');

mongoose.connect(config.db);

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open',function(){
    console.log("Successfully Connected to db ");
})

module.exports = db;