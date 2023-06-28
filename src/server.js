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

// config templates engine
configViewEngine(app);

// khai bao route
app.use(webRoute);

// Test connection to database


connection.query(
   'SELECT * FROM Users u',
   function(err, results, fileds) {
      console.log('>>>result= ', results);
      // console.log('>>>fields= ', fileds);

   }
)

app.listen(port,hostName, () => {
  console.log(`Example app listening on port ${port}`)
})
