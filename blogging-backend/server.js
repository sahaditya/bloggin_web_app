const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dbConfig = require('./configs/database.config.js');
const mongoose = require('mongoose');

const user_post_route = require('./routes/user-post.route');

mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({extende : true}));
app.use(bodyParser.json());
//app.use(express.json());
// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/', (req, res) =>{
    res.json({message : "Welcom to node server of blogging application"});
});
app.use('/blog', user_post_route)

app.listen(12345, ()=>{
    console.log("Listening on port 12345")
});
