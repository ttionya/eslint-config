module.exports = {
  rules: {

    /**
     * 大括号风格要求
     * @category TypeScript
     * @reason 关闭 Base 使用 TypeScript
     * @fixable
     */
    '@typescript-eslint/brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],

    'brace-style': 'off',
  },
}
