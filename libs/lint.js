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
    // 强制所有控制语句使用一致的括号风格
    'curly': ['error', 'all'],
    // 要求使用 === 和 !==
    'eqeqeq': ['error', 'smart'],
    // 禁止 if 语句中 return 语句之后有 else 块
    'no-else-return': 'error',
    // 禁用 eval()
    'no-eval': 'error',
    // 禁止使用多个空格
    'no-multi-spaces': ['error', {
      ignoreEOLComments: true,
    }],
    // 禁用不必要的 return await
    'no-return-await': 'error',
    // 禁止多余的 return 语句
    'no-useless-return':'error',

    /**
     * Stylistic Issues
     */
    // 在数组开括号后和闭括号前强制换行
    'array-bracket-newline': ['error', 'consistent'],
    // 强制数组方括号中使用一致的空格
    'array-bracket-spacing':['error', 'never'],
    // 强制数组元素间出现换行
    'array-element-newline': ['error', 'consistent'],
    // 强制在代码块中开括号前和闭括号后有空格
    'block-spacing': ['error', 'always'],
    // 大括号风格要求
    'brace-style': ['error', '1tbs', {
      allowSingleLine: true,
    }],
    // 要求末尾逗号
    'comma-dangle': ['error', 'always-multiline'],
    // 强制在逗号周围使用空格
    'comma-spacing': 'error',
    // 逗号风格
    'comma-style': 'error',
    // 要求或禁止文件末尾保留一行空行
    'eol-last': 'error',
    // 禁止在函数标识符和其调用之间有空格
    'func-call-spacing': 'error',
    // 强制在函数括号内使用一致的换行
    'function-paren-newline': ['error', 'multiline'],
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
