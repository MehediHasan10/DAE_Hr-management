const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Reference of express module
const app = express();

// Parsing the Json data 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB configuration and connection
mongoose.connect(process.env.database_url, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch((error) => console.log(error)); // Handles the initial error connection error
const db = mongoose.connection;
db.on('error', () => {
    console.log('> Error has occurred from Database...');
});
db.once('open', () => {
    console.log('> Database is connected successfully...');
});

// Route handler
app.use('/api/employeeAuth', require('./routes/auth/emp_auth'));
app.use('/api/dropdownApi', require('./routes/dropdown_api/form_api'));

app.use('/api/dbForms', require('./routes/db_forms/employeeInfo'));

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`> Server listening on port ${port}...`));
