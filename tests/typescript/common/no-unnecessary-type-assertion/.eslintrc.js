module.exports = {
  rules: {

    /**
     * 禁止无用的类型断言
     * @category TypeScript
     * @reason requires types information 报错
     * @requires-types-information
     * @fixable
     *
     * @configure 'error'
     */
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
  },
}
