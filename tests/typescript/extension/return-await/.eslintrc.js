module.exports = {
  rules: {

    /**
     * async 函数必须返回 await
     * @category TypeScript
     * @reason 看起来和 Base 的 no-return-await 功能一致
     * @fixable
     */
    '@typescript-eslint/return-await': 'off',
  },
}
