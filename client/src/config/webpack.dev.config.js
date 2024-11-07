const { merge } = require('webpack-merge');
const config = {
    mode: 'development',
}
const baseConfig = require('./webpack.config');
module.exports = merge( baseConfig, config);