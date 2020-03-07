module.exports = {
  rules: {

    /**
     * 禁止使用类似 eval 的写法
     * @category TypeScript
     * @reason 关闭 Base 使用 TypeScript
     * @requires-types-information
     */
    '@typescript-eslint/no-implied-eval': 'error',

    'no-implied-eval': 'off',
  },
}
