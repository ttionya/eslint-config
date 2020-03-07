module.exports = {
  rules: {

    /**
     * 在命名空间中，可以直接使用内部变量，不需要添加命名空间前缀
     * @category TypeScript
     * @reason requires types information 报错
     * @requires-types-information
     * @fixable
     */
    '@typescript-eslint/no-unnecessary-qualifier': 'off',
  },
}
