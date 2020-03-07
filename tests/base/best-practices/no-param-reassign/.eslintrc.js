module.exports = {
  rules: {

    /**
     * 禁止对函数的参数重新赋值
     * @category Base
     */
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
  },
}
