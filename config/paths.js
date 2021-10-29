/**
 * @author sunbin@aixahc.com
 * @date 2021/10/28 5:19 下午
 */
const fs = require('fs')
const path = require('path')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

module.exports = {
    resolveApp
}