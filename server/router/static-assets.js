const express = require('express');

function staticRouterFactory(staticAssetPath) {
  const staticRouter = express.Router();
  staticRouter.use('/assets', express.static(staticAssetPath));

  return staticRouter;
}

module.exports = staticRouterFactory;
