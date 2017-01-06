'use strict'

const Paloma = require('paloma');
const app = global.app = new Paloma();

app.load('services');
app.load('controllers');
app.load('routes');

app.listen(3000);
