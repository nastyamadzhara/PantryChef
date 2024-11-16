const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: path.resolve(__dirname, '../index.js'),
    output: {
        path: path.resolve(__dirname, '../../dist'),
        assetModuleFilename: 'images/[hash][ext][query]', // зберігання файлів у папці images
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'),
        }),
    ],
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            app: path.resolve(__dirname, '../'),
            components: path.resolve(__dirname, '../components'),
        },
    },
};

module.exports = config;
