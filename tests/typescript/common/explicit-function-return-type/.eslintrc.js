module.exports = {
  rules: {

    /**
     * 函数返回值必须与声明的类型一致
     * @category TypeScript
     */
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: false,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],
  },
}
