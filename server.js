const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

/******** Middlewares */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mySecret = require('./config/keys').mongoURI;

mongoose.connect(mySecret, {
	useNewUrlParser: true, 
	useUnifiedTopology: true 
})
.then(() => console.log('Connection established to MongoDB...'))
.catch(err => console.log("Could not connect to MongoDB...", err));

app.get('/', (req, res) => {
    res.send("Welcome to Mern Authentication...");
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

