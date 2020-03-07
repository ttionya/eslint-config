module.exports = {
  rules: {

    /**
     * async 函数的返回值必须是 Promise
     * @category TypeScript
     * @reason requires types information 报错
     * @requires-types-information
     */
    '@typescript-eslint/promise-function-async': 'off',
  },
}
