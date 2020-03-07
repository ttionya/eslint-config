module.exports = {
  rules: {

    /**
     * 禁止无用的表达式
     * @category Babel
     * @reason 关闭 Base 使用 Babel
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
