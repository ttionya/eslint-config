module.exports = {
  rules: {

    /**
     * 只允许使用必要的括号
     * @category TypeScript
     * @reason 关闭 Base 使用 TypeScript
     * @fixable
     */
    '@typescript-eslint/no-extra-parens': [
      'error',
      'all',
      {
        enforceForArrowConditionals: false,
      },
    ],

    'no-extra-parens': 'off',
  },
}
