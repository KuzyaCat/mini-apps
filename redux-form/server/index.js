const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const config = require('./config');

const app = express();

app.use(cors());
app.use(bodyParser());

const INITIAL_USER_FORM_DATA = {
  firstName: 'Alexander',
  lastName: 'Gavruk',
  email: 'sanganious@gmail.com',
  role: 'kekw',
  gender: 'male',
};

app.get('/', (req, res) => {
  res.send(JSON.stringify(INITIAL_USER_FORM_DATA));
});

app.post('/', (req) => {
  console.log(req.body);
});

app.listen(config.port, () => {
  console.log(`App listening at http://localhost:${config.port}`);
});
