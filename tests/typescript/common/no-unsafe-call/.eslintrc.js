module.exports = {
  rules: {

    /**
     * 禁止不安全的函数调用
     * @category TypeScript
     * @reason requires types information 报错
     * @requires-types-information
     */
    '@typescript-eslint/no-unsafe-call': 'off',
  },
}
