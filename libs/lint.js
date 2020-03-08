/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/explicit-function-return-type */

const path = require('path')
const { sync: globSync } = require('glob')
const { lstatSync } = require('fs')

const root = path.join(__dirname, '..')

// 项目 .eslintrc.js 使用的命名空间
const USED_NAMESPACE_NAME = 'typescript'

// eslintrc 模板
const eslintrc = require(path.join(root, 'tests', USED_NAMESPACE_NAME, 'index.js'))

// 设置规则
if (eslintrc.rules) {
  eslintrc.rules = getRuleObject()
} else if (eslintrc.overrides && eslintrc.overrides.length) {
  eslintrc.overrides[0].rules = getRuleObject()
}

module.exports = eslintrc

/**
 * 获得规则对象
 * @return {Object}
 */
function getRuleObject() {
  const ruleList = globSync(path.join(root, `tests/${USED_NAMESPACE_NAME}/[a-z]*/*`))

  return ruleList
    .filter((rulePath) => {
      return lstatSync(rulePath).isDirectory()
    })
    .map((rulePath) => {
      return require(`${rulePath}/.eslintrc.js`).rules
    })
    .reduce((last, current) => {
      return Object.assign(last, current)
    }, {})
}
