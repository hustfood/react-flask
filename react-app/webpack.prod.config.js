const merge = require('webpack-merge');

const path = require('path');
const common = require('./webpack.common.config');

module.exports = merge(common, {
    mode: 'production',
    output: {
        path: path.resolve(
            __dirname, '../static', 'dist'
        )
    }
});
