module.exports = {
  rules: {

    /**
     * 禁止范型的类型有默认值时，将范型设置为该默认值
     * @category TypeScript
     * @reason requires types information 报错
     * @requires-types-information
     * @fixable
     *
     * @configure 'error'
     */
    '@typescript-eslint/no-unnecessary-type-arguments': 'off',
  },
}
