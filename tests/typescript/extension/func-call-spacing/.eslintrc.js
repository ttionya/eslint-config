module.exports = {
  rules: {

    /**
     * 禁止在函数标识符和其调用之间有空格
     * @category TypeScript
     * @reason 关闭 Base 使用 TypeScript
     * @fixable
     */
    '@typescript-eslint/func-call-spacing': ['error', 'never'],

    'func-call-spacing': 'off',
  },
}
