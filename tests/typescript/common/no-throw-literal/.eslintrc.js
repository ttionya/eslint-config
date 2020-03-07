module.exports = {
  rules: {

    /**
     * 禁止 throw 字面量，必须 throw 一个 Error 对象
     * @category TypeScript
     * @reason requires types information 报错
     * @requires-types-information
     */
    '@typescript-eslint/no-throw-literal': 'off',
  },
}
