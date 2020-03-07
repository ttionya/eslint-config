module.exports = {
  rules: {

    /**
     * 禁止调用 Promise 时没有处理异常情况
     * @category TypeScript
     * @reason requires types information 报错
     * @requires-types-information
     */
    '@typescript-eslint/no-floating-promises': 'off',
  },
}
