module.exports = {
  rules: {

    /**
     * 类型注释周围含有空格
     * @category TypeScript
     * @fixable
     */
    '@typescript-eslint/type-annotation-spacing': [
      'error',
      {
        before: false,
        after: true,
        overrides: {
          arrow: {
            before: true,
          },
        },
      },
    ],
  },
}
