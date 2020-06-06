const express = require('express');

const route = express.Router();

route.use((req, res, next) => {
  console.log('middleware being used');
  next();
});

route.get('/', (req, res) => {
  res.send('/firstRoute');
});

route.get('/example', (req, res) => {
  res.send('/secondRoute');
});

module.exports = route;
