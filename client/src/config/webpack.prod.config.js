const { merge } = require('webpack-merge');
const config = {
    mode: 'production',
    output: {
        filename: 'bundle--[fullhash:base64].js',
    }
}
const baseConfig = require('./webpack.config');
module.exports = merge( baseConfig, config);