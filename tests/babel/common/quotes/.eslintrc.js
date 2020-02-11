module.exports = {
  rules: {

    /**
     * babel
     * 要求使用单引号，但是也可以直接使用反引号
     * @reason 关闭 eslint 使用 babel
     */
    'babel/quotes': [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],

    quotes: 'off',
  },
}
