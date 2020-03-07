module.exports = {
  rules: {

    /**
     * 避免错误的使用 Promise
     * @category TypeScript
     * @reason requires types information 报错
     * @requires-types-information
     */
    '@typescript-eslint/no-misused-promises': 'off',
  },
}
