const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('./webpack.common.config');

module.exports = merge(common, {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:3000/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ]
});
