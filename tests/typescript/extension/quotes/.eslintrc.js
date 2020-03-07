module.exports = {
  rules: {

    /**
     * 要求使用单引号，但是也可以直接使用反引号
     * @category TypeScript
     * @reason 关闭 Base 使用 TypeScript
     * @fixable
     */
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],

    'quotes': 'off',
  },
}
