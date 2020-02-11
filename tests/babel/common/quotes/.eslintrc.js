module.exports = {
  rules: {

    quotes: 'off',

    /**
     * babel
     * 要求使用单引号，但是也可以直接使用反引号
     */
    'babel/quotes': [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
  },
}
