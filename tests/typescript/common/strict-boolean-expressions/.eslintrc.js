module.exports = {
  rules: {

    /**
     * 条件判断必须传入布尔值
     * @category TypeScript
     * @reason requires types information 报错
     * @requires-types-information
     *
     * @configure [
     *   'error',
     *   {
     *     allowNullable: true,
     *     allowSafe : true,
     *     ignoreRhs : true,
     *   },
     * ]
     */
    '@typescript-eslint/strict-boolean-expressions': 'off',
  },
}
