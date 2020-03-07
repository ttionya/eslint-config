module.exports = {
  rules: {

    /**
     * 禁止大于连续两个空行
     * @category Base
     * @fixable
     */
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
      },
    ],
  },
}
