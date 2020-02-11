const path = require('path')
const Generator = require('./utils/generator')

const root = path.join(__dirname, '..')

// 项目 .eslintrc.js 使用的命名空间
const USED_NAMESPACE_NAME = 'base'

// 规则
const generator = new Generator()
const rules = generator.generateEslintrcRules(USED_NAMESPACE_NAME)

// eslintrc 模板
const eslintrc = require(path.join(root, 'tests', USED_NAMESPACE_NAME, 'index.js'))
eslintrc.rules = { ...rules, ...externalRules() }

module.exports = eslintrc

function externalRules() {
  return {}
}
