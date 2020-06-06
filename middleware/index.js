const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// app.use('/example', (req, res, next) => {
app.use((req, res, next) => {
  console.log('app.use', req.url, req.method);
  req.example = 'example';
  next();
});

app.get('/', (req, res) => {
  console.log('app.get', req.example);
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.listen(3000);
