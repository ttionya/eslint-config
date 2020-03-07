module.exports = {
  rules: {

    /**
     * 要求使用单引号，但是也可以直接使用反引号
     * @category Base
     * @fixable
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
