module.exports = {
  rules: {

    /**
     * 私有变量如果没有在构造函数外被赋值，则必须设为 readonly
     * @category TypeScript
     * @requires-types-information
     * @fixable
     */
    '@typescript-eslint/prefer-readonly': 'off',
  },
}
