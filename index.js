const express = require('express');
var cors = require('cors');
const app = express();

require('dotenv').config();

const port = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const controller = require('./controller');

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

const routes = require('./routes');
routes(app);

app.listen(port);
console.log(`Server run at port ${port}`);