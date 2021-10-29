/**
 * @author sunbin@aixahc.com
 * @date 2021/10/28 4:42 下午
 */
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const { resolveApp } = require('./paths')

module.exports = merge(common, {
    // 开发模式
    mode: 'development',
    // 输出
    output: {
        // bundle 文件名称
        filename: '[name].bundle.js',
        // bundle 文件路径
        path: resolveApp('dist'),
        // 编译前清除目录
        clean: true
    },
    // 开发工具，开启source map，编译调试
    devtool: 'eval-cheap-module-source-map',
});