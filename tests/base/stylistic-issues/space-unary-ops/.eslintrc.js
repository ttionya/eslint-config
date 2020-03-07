module.exports = {
  rules: {

    /**
     * 一元操作符附近，关键字需要空格，符号不需要空格
     * @category Base
     * @fixable
     */
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
      },
    ],
  },
}
