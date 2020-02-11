module.exports = {
  rules: {

    /**
     * babel
     * new 后面的类名必须首字母大写
     * @reason 关闭 eslint 使用 babel
     */
    'babel/new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: false,
        properties: true,
      },
    ],

    'new-cap': 'off',
  },
}
