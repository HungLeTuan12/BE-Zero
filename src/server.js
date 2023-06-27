require('dotenv').config();
const express = require('express');
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRoute = require('./routes/web');
const app = express()
const port = process.env.PORT || 8888;
const hostName = process.env.HOST_NAME;
// console.log(">>> process env", process.env);

// config templates engine
configViewEngine(app);

// khai bao route
app.use(webRoute);

app.listen(port,hostName, () => {
  console.log(`Example app listening on port ${port}`)
})
