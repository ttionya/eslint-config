module.exports = {
  rules: {

    /**
     * 测试表达式中的布尔类型禁止与 true 或 false 直接比较
     * @category TypeScript
     * @reason requires types information 报错
     * @requires-types-information
     * @fixable
     */
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
  },
}
