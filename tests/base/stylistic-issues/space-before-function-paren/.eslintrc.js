module.exports = {
  rules: {

    /**
     * function 的左括号之前使用空格，除非是命名函数
     */
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
  },
}
