/**
 * ESLint 规则
 * https://github.com/ttionya/eslint-config
 *
 * Author: ttionya <my@ttionya.com>
 * Version: 0.3.0
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
     */
    'new-cap': 'off',

    /**
     * babel
     * 禁止在类之外的地方使用 this
     * @reason 只允许在 class 中使用 this
     */
    'no-invalid-this': 'off',

    /**
     * babel
     * 禁止无用的表达式
     */
    'no-unused-expressions': 'off',

    /**
     * babel
     * 对象中空格保持一致性
     */
    'object-curly-spacing': 'off',

    /**
     * babel
     * 要求使用单引号，但是也可以直接使用反引号
     */
    quotes: 'off',

    /**
     * babel
     * 不使用分号
     */
    semi: 'off',

    /**
     * babel
     * 使用合法的 typeof 值
     */
    'valid-typeof': 'off',
  },
}
