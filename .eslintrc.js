module.exports = {
  extends: [
    '@ttionya/eslint-config/base',
    './libs/lint.js',
  ],

  // 添加 parserServices 支持
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
}
