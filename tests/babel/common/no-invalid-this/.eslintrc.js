module.exports = {
  rules: {

    'no-invalid-this': 'off',

    /**
     * babel
     * 禁止在类之外的地方使用 this
     * @reason 只允许在 class 中使用 this
     */
    'babel/no-invalid-this': 'error',
  },
}
