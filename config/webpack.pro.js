/**
 * @author sunbin@aixahc.com
 * @date 2021/10/28 4:43 下午
 */
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const { resolveApp } = require('./paths')

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: resolveApp('dist'),

        clean: true
    }
});