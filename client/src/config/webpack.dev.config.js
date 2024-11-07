const { merge } = require('webpack-merge');
const { resolve } = require('node:path')
const config = {
    mode: 'development',
    output: {
        filename: 'bundle.js',

    },
    devServer: {
        static: {
            directory: resolve(__dirname, '../../dist'),
        },
        port: 3000,
        historyApiFallback: true,

    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: 'asset/resource',
            },
        ],
    }
}
const baseConfig = require('./webpack.config');


module.exports = merge( baseConfig, config);