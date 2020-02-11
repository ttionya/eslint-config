module.exports = {
  root: true,

  extends: [
    '@ttionya/eslint-config/base',
  ],

  plugins: [
    'babel',
  ],

  parser: 'babel-eslint',

  parserOptions: {
    // 即使没有 babel 配置文件，也使用 babel-eslint 来解析
    requireConfigFile: false,
    // 仅允许 import export 语句出现在模块的顶层
    allowImportExportEverywhere: false,
  },

  rules: {},
}
