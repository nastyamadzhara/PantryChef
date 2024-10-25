const { merge } = require('webpack-merge');
const config = {
    mode: 'production',
}
const baseConfig = require('./webpack.config');
module.exports = merge( baseConfig, config);