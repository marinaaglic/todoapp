const config = require('./config');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const todoRouter = require('./controllers/todoRouter');

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + '/public'));

mongoose.connect(config.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(result => {
    console.log("Connected to database.");
}).catch(error => {
    console.log(error);
});

app.use(cors())
//app.use(cookieParser());
app.use(express.json())
app.use(express.static('build'))

app.use('/todos', todoRouter);

module.exports = app;