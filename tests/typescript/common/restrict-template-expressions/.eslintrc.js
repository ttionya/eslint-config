module.exports = {
  rules: {

    /**
     * 模版字符串中的变量类型必须是字符串
     * @category TypeScript
     * @reason requires types information 报错
     * @requires-types-information
     *
     * @configure [
     *   'error',
     *   {
     *     allowNumber: true,
     *     allowBoolean: true,
     *     allowNullable: true,
     *   },
     * ]
     */
    '@typescript-eslint/restrict-template-expressions': 'off',
  },
}
