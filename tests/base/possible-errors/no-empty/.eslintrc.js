module.exports = {
  rules: {

    /**
     * 禁止出现空代码块，但允许 catch 为空代码块
     * @category Base
     */
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true,
      },
    ],
  },
}
