const frontendConfig = require('./webpack/frontend.config');
const workerConfig = require('./webpack/worker.config');

module.exports = [frontendConfig, workerConfig];
