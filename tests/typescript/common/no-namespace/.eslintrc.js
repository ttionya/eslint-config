module.exports = {
  rules: {

    /**
     * 禁止使用 namespace 来定义命名空间
     * @category TypeScript
     * @reason 使用 ES6 Module 代替，但是允许 declare namespace ... {} 这样定义外部命名空间
     */
    '@typescript-eslint/no-namespace': [
      'error',
      {
        allowDeclarations: true,
        allowDefinitionFiles: true,
      },
    ],
  },
}
