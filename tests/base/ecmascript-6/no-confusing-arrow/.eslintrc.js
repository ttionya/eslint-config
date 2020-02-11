module.exports = {
  rules: {

    /**
     * 防止箭头函数的箭头混淆代码，需要使用圆括号包裹代码
     */
    'no-confusing-arrow': ['error', { allowParens: true } ],
  },
}
