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
eslintrc.rules = Object.assign({}, rules, externalRules())

module.exports = eslintrc

function externalRules() {
  return {

    /**
     * ECMAScript 6
     */
    // 禁止多余的 return 语句
    'no-useless-return':'error',

    /**
     * Stylistic Issues
     */
    // 强制隐式返回的箭头函数体的位置
    'implicit-arrow-linebreak': ['error', 'beside'],
    // 强制关键字周围空格的一致性
    'keyword-spacing': 'error',
    // 强制使用一致的换行符风格
    'linebreak-style': 'error',
    // 强制注释周围有空行
    'lines-around-comment': 'error',
    // 强制或禁止调用无参构造函数时有圆括号
    'new-parens': 'error',
    // 禁止连续赋值
    'no-multi-assign': 'error',
    // 不允许多个空行
    'no-multiple-empty-lines': 'warn',
    // 禁止属性前有空白
    'no-whitespace-before-property': 'error',
    // 强制在花括号内使用一致的换行符
    'object-curly-newline': ['error', {
      multiline: true,
      consistent: true,
    }],
    // 强制在大括号中使用一致的空格
    'object-curly-spacing': ['error', 'always', {
      arraysInObjects: true,
      objectsInObjects: true,
    }],
    // 强制将对象的属性放在不同的行上
    'object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: true,
    }],
    // 强制操作符使用一致的换行符风格
    'operator-linebreak': ['error', 'before'],
    // 强制使用一致的单引号
    'quotes':['error', 'single'],
    // 禁止分号
    'semi': ['error', 'never'],
    // 强制在块之前使用一致的空格
    'space-before-blocks': 'error',
    // 强制在 function 的左括号之前使用一致的空格
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],

    /**
     * ECMAScript 6
     */
    // 要求箭头函数体使用大括号
    // 'arrow-body-style': ['error', 'as-needed'],
    // 要求箭头函数的参数使用圆括号
    'arrow-parens': ['error', 'always'],
  }
}
