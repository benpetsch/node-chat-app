const path = require('path');
const express = require('express');

require('dotenv').config()
const appPort = process.env.appPort || 3000;

const publicPath = path.join(__dirname, '/../public');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(appPort, () => {
  console.log(`Server is up at port ${appPort}`);
});
