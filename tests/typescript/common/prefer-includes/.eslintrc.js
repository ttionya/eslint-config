module.exports = {
  rules: {

    /**
     * 使用 includes 而不是 indexOf
     * @category TypeScript
     * @reason requires types information 报错
     * @requires-types-information
     * @fixable
     *
     * @configure 'error'
     */
    '@typescript-eslint/prefer-includes': 'off',
  },
}
