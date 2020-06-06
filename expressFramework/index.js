const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/example', (req, res) => {
  res.send('Hitting example route');
});

app.get('/example/:name/:age', (req, res) => {
  const { params } = req;
  const { name, age } = params;
  res.send(name + ' : ' + age);

  // Query string parameters: URL?param1=valueParam1&param2=valueParam2
  console.log(req.query);

  // Route params when you must have the data (obligatory)
  // Query string params when you have optional data/settings (like sort)
});

app.listen(3000);
