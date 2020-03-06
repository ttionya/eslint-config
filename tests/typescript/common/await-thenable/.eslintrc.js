module.exports = {
  rules: {

    /**
     * 禁止对没有 then 方法的对象使用 await
     * @category TypeScript
     * @reason requires types information 报错
     * @requires-types-information
     *
     * @reason 可以用 Promise.resolve() 包一层
     * @configure 'error'
     */
    '@typescript-eslint/await-thenable': 'off',
  },
}
