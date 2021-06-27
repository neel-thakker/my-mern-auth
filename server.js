const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');    // our router

const app = express();

const mySecret = require('./config/keys').mongoURI;

mongoose.connect(mySecret, {
	useNewUrlParser: true, 
	useUnifiedTopology: true 
})
.then(() => console.log('Connection established to MongoDB...'))
.catch(err => console.log("Could not connect to MongoDB...", err));

/******** Middlewares */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// Routes
app.use('/api/users', users);

app.get('/', (req, res) => {
    res.send("Welcome to Mern Authentication...");
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

