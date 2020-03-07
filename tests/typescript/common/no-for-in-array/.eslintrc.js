module.exports = {
  rules: {

    /**
     * 禁止对 array 使用 for in 循环
     * @category TypeScript
     * @requires-types-information
     *
     * @configure 'error'
     */
    '@typescript-eslint/no-for-in-array': 'off',
  },
}
