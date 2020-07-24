const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:/MernBeltDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("DB connection establiched"))
    .catch(err => console.log(err))