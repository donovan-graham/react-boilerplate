const path = require('path');
const express = require('express');

const distPath = path.join(__dirname, '../dist');

const noCacheMiddleware = require('./middleware/no-cache');
const staticAssetsRouter = require('./router/static-assets')(`${distPath}/assets`);
const singlePageAppRouter = require('./router/single-page-app')(`${distPath}/index.html`);

const mainRouter = express.Router();

mainRouter.use(staticAssetsRouter);
mainRouter.use(noCacheMiddleware);
mainRouter.use(singlePageAppRouter);

module.exports = mainRouter;
