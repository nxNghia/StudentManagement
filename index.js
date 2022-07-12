require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { poolDemo } = require('./database');

const port = process.env.PORT || 8000;

// test database connection
poolDemo().then(result => console.log(result.rows[0]));

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: '*' }));

app.listen(port, () => console.log(`Running on port ${port}`));
