module.exports = {
  rules: {

    /**
     * 在逗号后使用空格
     * @category TypeScript
     * @reason 关闭 Base 使用 TypeScript
     * @fixable
     */
    '@typescript-eslint/comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],

    'comma-spacing': 'off',
  },
}
