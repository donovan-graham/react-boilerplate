const fs = require('fs');
const express = require('express');

const express = require('express');

function singlePageAppRouterFactory(htmlFile) {
  const singlePageAppRouter = express.Router();

  singlePageAppRouter.use('*', (req, res) => {
    if (!fs.existsSync(htmlFile)) {
      res.send('index unavailable');
      return;
    }

    const html = fs.readFileSync(htmlFile, 'UTF-8');
    res.send(html);
  });

  return singlePageAppRouter;
}

module.exports = singlePageAppRouterFactory;
