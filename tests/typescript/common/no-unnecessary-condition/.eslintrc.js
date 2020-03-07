module.exports = {
  rules: {

    /**
     * 条件表达式禁止是永远为真（或永远为假）的
     * @category TypeScript
     * @reason requires types information 报错
     * @requires-types-information
     * @fixable
     */
    '@typescript-eslint/no-unnecessary-condition': 'off',
  },
}
