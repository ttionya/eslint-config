module.exports = {
  rules: {

    /**
     * 块级注释之前需要空行
     * @category Base
     * @fixable
     */
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
      },
    ],
  },
}
