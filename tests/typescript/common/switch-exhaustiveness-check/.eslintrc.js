module.exports = {
  rules: {

    /**
     * 使用联合类型作为 switch 的对象时，必须包含每一个类型的 case
     * @category TypeScript
     * @reason requires types information 报错
     * @requires-types-information
     *
     * @configure 'error'
     */
    '@typescript-eslint/switch-exhaustiveness-check': 'off',
  },
}
