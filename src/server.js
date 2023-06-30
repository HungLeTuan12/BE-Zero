require('dotenv').config();
const express = require('express');
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRoute = require('./routes/web');
const connection = require('./config/database');
const app = express();
const port = process.env.PORT || 8888;
const hostName = process.env.HOST_NAME;
// console.log(">>> process env", process.env);

// config req.body
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

// config templates engine
configViewEngine(app);

// khai bao route
app.use(webRoute);

// Test connection to database

app.listen(port,hostName, () => {
  console.log(`Example app listening on port ${port}`)
})
