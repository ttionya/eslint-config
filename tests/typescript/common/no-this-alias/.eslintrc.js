module.exports = {
  rules: {

    /**
     * typescript
     * 禁止将 this 赋值给其他变量，除非是解构赋值和 self
     * @reason 增加可读性
     */
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowDestructuring: true,
        allowedNames: [
          'self',
        ],
      },
    ],
  },
}
