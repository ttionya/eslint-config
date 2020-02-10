module.exports = {
  rules: {

    /**
     * 一元操作符附近，关键字需要空格，符号不需要空格
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
