module.exports = {
  rules: {

    /**
     * 要求更有意义的 toString()
     * @category TypeScript
     * @reason requires types information 报错
     * @requires-types-information
     */
    '@typescript-eslint/no-base-to-string': 'off',
  },
}
