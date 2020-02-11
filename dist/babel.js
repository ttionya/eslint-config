/**
 * ESLint 规则
 * https://github.com/ttionya/eslint-config
 *
 * Author: ttionya <my@ttionya.com>
 * Version: 0.3.1
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
     * babel
     * new 后面的类名必须首字母大写
     * @reason 关闭 eslint 使用 babel
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
     * babel
     * new 后面的类名必须首字母大写
     * @reason 关闭 eslint 使用 babel
     */
    'new-cap': 'off',

    /**
     * babel
     * 禁止在类之外的地方使用 this
     * @reason 只允许在 class 中使用 this
     * @reason 关闭 eslint 使用 babel
     */
    'babel/no-invalid-this': 'error',

    /**
     * babel
     * 禁止在类之外的地方使用 this
     * @reason 只允许在 class 中使用 this
     * @reason 关闭 eslint 使用 babel
     */
    'no-invalid-this': 'off',

    /**
     * babel
     * 禁止无用的表达式
     * @reason 关闭 eslint 使用 babel
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
     * babel
     * 禁止无用的表达式
     * @reason 关闭 eslint 使用 babel
     */
    'no-unused-expressions': 'off',

    /**
     * babel
     * 对象中空格保持一致性
     * @reason 关闭 eslint 使用 babel
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
     * babel
     * 对象中空格保持一致性
     * @reason 关闭 eslint 使用 babel
     */
    'object-curly-spacing': 'off',

    /**
     * babel
     * 要求使用单引号，但是也可以直接使用反引号
     * @reason 关闭 eslint 使用 babel
     */
    'babel/quotes': [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],

    /**
     * babel
     * 要求使用单引号，但是也可以直接使用反引号
     * @reason 关闭 eslint 使用 babel
     */
    quotes: 'off',

    /**
     * babel
     * 不使用分号
     * @reason 关闭 eslint 使用 babel
     */
    'babel/semi': ['error', 'never'],

    /**
     * babel
     * 不使用分号
     * @reason 关闭 eslint 使用 babel
     */
    semi: 'off',

    /**
     * babel
     * 使用合法的 typeof 值
     * @reason 关闭 eslint 使用 babel
     */
    'babel/valid-typeof': 'error',

    /**
     * babel
     * 使用合法的 typeof 值
     * @reason 关闭 eslint 使用 babel
     */
    'valid-typeof': 'off',
  },
}
