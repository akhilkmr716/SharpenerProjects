const express = require('express');

const app = express();

const routes = require('./routes');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

app.use("/", routes);

app.listen(3000);