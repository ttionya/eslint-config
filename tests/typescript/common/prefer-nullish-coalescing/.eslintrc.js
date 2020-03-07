module.exports = {
  rules: {

    /**
     * 使用 ?? 替代 ||
     * @category TypeScript
     * @reason requires types information 报错
     * @requires-types-information
     * @fixable
     *
     * @configure 'error'
     */
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
  },
}
