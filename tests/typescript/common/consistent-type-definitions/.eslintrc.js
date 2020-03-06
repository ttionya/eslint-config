module.exports = {
  rules: {

    /**
     * 优先使用 interface 而不是 type
     * @category TypeScript
     * @reason interface 可以 implement, extend 和 merge
     * @fixable
     */
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
  },
}
