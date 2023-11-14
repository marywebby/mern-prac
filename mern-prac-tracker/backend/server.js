const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

// configures enviorment varibales in .ENV file
require('dotenv').config();

// this is to create our express server, 
const app = express();
const port = process.env.port || 5000;

// middleware, cors and then allowing us to parse the json we send and recieve 
app.use(cors());
app.use(express.json());

// adding
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true}
);
const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
});

// starts the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
