module.exports = {
  rules: {

    /**
     * new 后面的类名必须首字母大写
     * @category Babel
     * @reason 关闭 Base 使用 Babel
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
