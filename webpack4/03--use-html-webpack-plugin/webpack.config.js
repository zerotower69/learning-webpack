const path = require('path');
const Webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')
module.exports = {
    entry: '/src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlPlugin({
            template: '/src/index.html'
        })
    ]
}