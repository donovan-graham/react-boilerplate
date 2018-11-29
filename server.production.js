const express = require('express');
const router = require('./server');

const app = express();

app.use(router);

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
