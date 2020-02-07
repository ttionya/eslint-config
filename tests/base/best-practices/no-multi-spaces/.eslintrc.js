module.exports = {
  rules: {

    /**
     * 禁止使用多个空格
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
