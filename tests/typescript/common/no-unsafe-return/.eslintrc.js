module.exports = {
  rules: {

    /**
     * 禁止函数返回 any 类型
     * @category TypeScript
     * @reason requires types information 报错
     * @requires-types-information
     *
     * @configure 'error'
     */
    '@typescript-eslint/no-unsafe-return': 'off',
  },
}
