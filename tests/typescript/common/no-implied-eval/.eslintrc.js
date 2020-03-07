module.exports = {
  rules: {

    /**
     * 禁止使用类似 eval 的写法
     * @category TypeScript
     * @reason requires types information 报错
     * @requires-types-information
     *
     * @configure 'error'
     */
    '@typescript-eslint/no-implied-eval': 'off',
  },
}
