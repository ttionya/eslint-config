module.exports = {
  rules: {

    /**
     * 传入的参数要设置为只读属性
     * @category TypeScript
     * @reason requires types information 报错
     * @requires-types-information
     *
     * @configure [
     *   'error',
     *   {
     *     checkParameterProperties: false,
     *   },
     * ]
     */
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
  },
}
