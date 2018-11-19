const fs = require('fs');
const path = require('path');
const express = require('express');

const htmlFile = path.join(__dirname, '../dist/index.html');

const app = express();

function nocache(req, res, next) {
  res.setHeader('Surrogate-Control', 'no-store');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
}

app.use([nocache]);

app.use('*', (req, res) => {
  const html = fs.readFileSync(htmlFile, 'UTF-8');
  res.send(html);
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
