module.exports = {
  rules: {

    /**
     * 不允许空方法，除非带访问控制的构造函数
     * @category TypeScript
     * @reason 关闭 Base 使用 TypeScript
     */
    '@typescript-eslint/no-empty-function': 'error',

    'no-empty-function': 'off',
  },
}
