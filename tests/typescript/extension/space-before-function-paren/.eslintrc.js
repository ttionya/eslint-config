module.exports = {
  rules: {

    /**
     * function 的左括号之前使用空格，除非是命名函数
     * @category TypeScript
     * @reason 关闭 Base 使用 TypeScript
     * @fixable
     */
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],

    'space-before-function-paren': 'off',
  },
}
