module.exports = {
  rules: {

    /**
     * 使用加号时，两者必须同为数字或同为字符串
     * @category TypeScript
     * @reason requires types information 报错
     * @requires-types-information
     *
     * @configure [
     *   'error',
     *   {
     *     checkCompoundAssignments: true,
     *   },
     * ]
     */
    '@typescript-eslint/restrict-plus-operands': 'off',
  },
}
