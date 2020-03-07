module.exports = {
  rules: {

    /**
     * 测试表达式中的布尔类型禁止与 true 或 false 直接比较
     * @category TypeScript
     * @reason 有时候会出现要求完全等于 true 或 false 的情况
     * @requires-types-information
     * @fixable
     */
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
  },
}
