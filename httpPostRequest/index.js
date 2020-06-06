const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Joi = require('joi');

const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.post('/', (req, res) => {
  console.log('req.body', req.body);

  const schema = Joi.object().keys({
    email: Joi.string().trim().email().required(),
    password: Joi.string().min(4).max(10).required(),
  });

  Joi.validate(req.body, schema, (error, result) => {
    if (error) {
      console.log('error', error);
      res.send('An error has occurred');
    }
    console.log('result', result);
    res.send('successfully posted data');
  });
  // database work here
});

app.listen(3000);
