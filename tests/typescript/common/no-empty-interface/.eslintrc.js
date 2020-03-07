module.exports = {
  rules: {

    /**
     * 禁止定义空的接口
     * @category TypeScript
     * @fixable
     */
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
  },
}
