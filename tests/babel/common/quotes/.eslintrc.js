module.exports = {
  rules: {

    /**
     * 要求使用单引号，但是也可以直接使用反引号
     * @category Babel
     * @reason 关闭 Base 使用 Babel
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
