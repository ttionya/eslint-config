module.exports = {
  rules: {

    /**
     * interface 或 type 等统一不要分隔符
     * @category TypeScript
     * @fixable
     */
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false,
        },
        singleline: {
          requireLast: false,
        },
      },
    ],
  },
}
