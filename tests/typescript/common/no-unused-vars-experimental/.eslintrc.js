module.exports = {
  rules: {

    /**
     * 禁止已定义的变量未使用
     * @category TypeScript
     * @reason requires types information 报错
     * @requires-types-information
     *
     * @configure [
     *   'error',
     *    {
     *      ignoreArgsIfArgsAfterAreUsed: true,
     *    },
     * ]
     */
    '@typescript-eslint/no-unused-vars-experimental': 'off',
  },
}
