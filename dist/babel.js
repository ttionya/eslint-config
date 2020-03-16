/**
 * ESLint 规则
 * https://github.com/ttionya/eslint-config
 *
 * Author: ttionya <my@ttionya.com>
 * Version: 1.0.1
 *
 * 此文件是由脚本 scripts/build.js 自动生成
 */
module.exports = {
  root: true,

  extends: ['@ttionya/eslint-config/base'],

  plugins: ['babel'],

  parser: 'babel-eslint',

  parserOptions: {
    // 即使没有 babel 配置文件，也使用 babel-eslint 来解析
    requireConfigFile: false,
    // 仅允许 import export 语句出现在模块的顶层
    allowImportExportEverywhere: false,
  },

  rules: {
    /**
     * new 后面的类名必须首字母大写
     * @category Babel
     * @reason 关闭 Base 使用 Babel
     */
    'babel/new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: false,
        properties: true,
      },
    ],

    /**
     * new 后面的类名必须首字母大写
     * @category Babel
     * @reason 关闭 Base 使用 Babel
     */
    'new-cap': 'off',

    /**
     * 禁止在类之外的地方使用 this
     * @category Babel
     * @reason 关闭 Base 使用 Babel
     * @reason 只允许在 class 中使用 this
     */
    'babel/no-invalid-this': 'error',

    /**
     * 禁止在类之外的地方使用 this
     * @category Babel
     * @reason 关闭 Base 使用 Babel
     * @reason 只允许在 class 中使用 this
     */
    'no-invalid-this': 'off',

    /**
     * 禁止无用的表达式
     * @category Babel
     * @reason 关闭 Base 使用 Babel
     */
    'babel/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],

    /**
     * 禁止无用的表达式
     * @category Babel
     * @reason 关闭 Base 使用 Babel
     */
    'no-unused-expressions': 'off',

    /**
     * 对象中空格保持一致性
     * @category Babel
     * @reason 关闭 Base 使用 Babel
     * @fixable
     */
    'babel/object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: true,
        objectsInObjects: true,
      },
    ],

    /**
     * 对象中空格保持一致性
     * @category Babel
     * @reason 关闭 Base 使用 Babel
     * @fixable
     */
    'object-curly-spacing': 'off',

    /**
     * 要求使用单引号，但是也可以直接使用反引号
     * @category Babel
     * @reason 关闭 Base 使用 Babel
     */
    'babel/quotes': [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],

    /**
     * 要求使用单引号，但是也可以直接使用反引号
     * @category Babel
     * @reason 关闭 Base 使用 Babel
     */
    quotes: 'off',

    /**
     * 不使用分号
     * @category Babel
     * @reason 关闭 Base 使用 Babel
     * @fixable
     */
    'babel/semi': ['error', 'never'],

    /**
     * 不使用分号
     * @category Babel
     * @reason 关闭 Base 使用 Babel
     * @fixable
     */
    semi: 'off',

    /**
     * 使用合法的 typeof 值
     * @category Babel
     * @reason 关闭 Base 使用 Babel
     */
    'babel/valid-typeof': 'error',

    /**
     * 使用合法的 typeof 值
     * @category Babel
     * @reason 关闭 Base 使用 Babel
     */
    'valid-typeof': 'off',
  },
}
