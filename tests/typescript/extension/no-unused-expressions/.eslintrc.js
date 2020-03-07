module.exports = {
  rules: {

    /**
     * 禁止无用的表达式
     * @category TypeScript
     * @reason 关闭 Base 使用 TypeScript
     */
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],

    'no-unused-expressions': 'off',
  },
}
