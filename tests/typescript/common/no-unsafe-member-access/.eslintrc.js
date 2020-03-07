module.exports = {
  rules: {

    /**
     * 禁止不安全的属性访问
     * @category TypeScript
     * @reason requires types information 报错
     * @requires-types-information
     */
    '@typescript-eslint/no-unsafe-member-access': 'off',
  },
}
