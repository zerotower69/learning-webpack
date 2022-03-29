
const path = require('path');

module.exports = {
    entry: '/src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module:
    {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'print-loader'
                    }
                ]
            }
        ]
    },
    mode: 'development',
    resolveLoader: {
        modules: [path.resolve(__dirname, './loaders'), 'node_modules']
    },

}