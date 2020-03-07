module.exports = {
  rules: {

    /**
     * 模版字符串中的变量类型必须是字符串
     * @category TypeScript
     * @requires-types-information
     */
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        allowNumber: true,
        allowBoolean: true,
        allowNullable: true,
      },
    ],
  },
}
