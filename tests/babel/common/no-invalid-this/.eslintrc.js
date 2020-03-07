module.exports = {
  rules: {

    /**
     * 禁止在类之外的地方使用 this
     * @category Babel
     * @reason 关闭 Base 使用 Babel
     * @reason 只允许在 class 中使用 this
     */
    'babel/no-invalid-this': 'error',

    'no-invalid-this': 'off',
  },
}
