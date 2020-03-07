module.exports = {
  rules: {

    /**
     * 禁止使用多个空格，除了行尾注释和对象属性
     * @category Base
     * @fixable
     */
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true,
        exceptions: {
          Property: true,
        },
      },
    ],
  },
}
