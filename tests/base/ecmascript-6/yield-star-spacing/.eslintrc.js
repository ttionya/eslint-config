module.exports = {
  rules: {

    /**
     * yield * 靠近函数一侧
     * @category Base
     * @fixable
     */
    'yield-star-spacing': [
      'error',
      {
        before: true,
        after: false,
      },
    ],
  },
}
