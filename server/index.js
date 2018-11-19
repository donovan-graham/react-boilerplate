const fs = require('fs');
const path = require('path');
const express = require('express');

const htmlFile = path.join(__dirname, '../dist/index.html');

const app = express();

function nocache(req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
}

app.use([nocache]);

app.use('*', (req, res) => {
  res.set('');
  const html = fs.readFileSync(htmlFile, 'UTF-8');
  res.send(html);
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
