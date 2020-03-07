module.exports = {
  rules: {

    /**
     * 禁止对没有 then 方法的对象使用 await
     * @category TypeScript
     * @reason 可以用 Promise.resolve() 包一层
     * @requires-types-information
     */
    '@typescript-eslint/await-thenable': 'error',
  },
}
