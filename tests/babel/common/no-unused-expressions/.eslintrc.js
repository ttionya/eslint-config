module.exports = {
  rules: {

    /**
     * babel
     * 禁止无用的表达式
     * @reason 关闭 eslint 使用 babel
     */
    'babel/no-unused-expressions': [
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
