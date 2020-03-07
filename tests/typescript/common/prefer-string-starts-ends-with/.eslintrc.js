module.exports = {
  rules: {

    /**
     * 使用 String#startsWith 而不是其他方式
     * @category TypeScript
     * @reason requires types information 报错
     * @requires-types-information
     * @fixable
     *
     * @configure 'error'
     */
    '@typescript-eslint/prefer-string-starts-ends-with': 'off',
  },
}
