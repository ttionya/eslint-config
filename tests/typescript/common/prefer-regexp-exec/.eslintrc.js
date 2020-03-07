module.exports = {
  rules: {

    /**
     * 使用 RegExp#exec 而不是 String#match
     * @category TypeScript
     * @reason requires types information 报错
     * @requires-types-information
     *
     * @configure 'error'
     */
    '@typescript-eslint/prefer-regexp-exec': 'off',
  },
}
