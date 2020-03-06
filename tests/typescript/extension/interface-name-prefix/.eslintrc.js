module.exports = {
  rules: {

    /**
     * interface 首字母必须以 I 开头
     * @category TypeScript
     * @reason 增加可识别性
     */
    '@typescript-eslint/interface-name-prefix': [
      'error',
      {
        prefixWithI: 'always',
      },
    ],
  },
}
