module.exports = {
  rules: {

    /**
     * 方法调用时需要绑定到正确的 this 上
     * @category TypeScript
     * @reason requires types information 报错
     * @requires-types-information
     */
    '@typescript-eslint/unbound-method': 'off',
  },
}
