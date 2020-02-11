module.exports = {
  rules: {

    /**
     * babel
     * 禁止在类之外的地方使用 this
     * @reason 只允许在 class 中使用 this
     * @reason 关闭 eslint 使用 babel
     */
    'babel/no-invalid-this': 'error',

    'no-invalid-this': 'off',
  },
}
