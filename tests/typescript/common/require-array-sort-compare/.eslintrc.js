module.exports = {
  rules: {

    /**
     * 使用 sort 时必须传入比较函数
     * @category TypeScript
     * @reason requires types information 报错
     * @requires-types-information
     *
     * @configure 'error'
     */
    '@typescript-eslint/require-array-sort-compare': 'off',
  },
}
