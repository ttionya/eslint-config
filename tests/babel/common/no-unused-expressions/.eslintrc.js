module.exports = {
  rules: {

    'no-unused-expressions': 'off',

    /**
     * babel
     * 禁止无用的表达式
     */
    'babel/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
  },
}
