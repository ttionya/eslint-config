module.exports = {
  rules: {

    /**
     * 要求使用单引号，但是也可以直接使用反引号
     */
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
  },
}
