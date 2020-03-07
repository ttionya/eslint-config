module.exports = {
  rules: {

    /**
     * 变量必须先定义后使用
     * @category TypeScript
     * @reason 关闭 Base 使用 TypeScript
     * @reason 存在函数后调用的问题
     */
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        variables: false,
        functions: false,
        classes: false,
        enums: false,
        typedefs: false,
      },
    ],

    'no-use-before-define': 'off',
  },
}
