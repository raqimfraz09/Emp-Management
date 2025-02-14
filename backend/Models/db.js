const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL)
    .then(() =>{
        console.log('DATABASE CONNECTED SUCEESSFULLY....');
    }).catch((err) => {
        console.log('DATABASE CONNECTION FAILED....');
    })