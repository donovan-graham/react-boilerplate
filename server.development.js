const express = require('express');
const path = require('path');
const chokidar = require('chokidar');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require('./webpack.development.config');

const app = express();

/* webpack - watch and rebuild client */
const reHotUpdate = /hot-update\.(js|json)$/;
const compiler = webpack(webpackConfig);

app.use(
  webpackDevMiddleware(compiler, {
    writeToDisk: filePath => !reHotUpdate.test(filePath),
    logLevel: 'warn',
    publicPath: webpackConfig.output.publicPath
  })
);

app.use(
  webpackHotMiddleware(compiler, {
    log: console.log,
    path: `${webpackConfig.output.publicPath}__webpack_hmr`,
    heartbeat: 10 * 1000
  })
);

app.use(webpackConfig.output.publicPath, express.static(webpackConfig.output.path));

/* chokidar - watch and reload server */
const watcher = chokidar.watch([path.join(__dirname, 'server'), path.join(__dirname, 'node_modules')]);

watcher.on('ready', () => {
  watcher.on('all', (event, path) => {
    Object.keys(require.cache).forEach(id => {
      console.log(path, ' === ', id);
      if (id.startsWith(path)) delete require.cache[id];
    });
  });
});

app.use((req, res, next) => require('./server')(req, res, next));

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
