module.exports = {
  rules: {

    /**
     * 已定义的变量必须使用
     * @category TypeScript
     * @reason 关闭 eslint 使用 typescript
     */
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        caughtErrors: 'none',
      },
    ],

    'no-unused-vars': 'off',
  },
}
