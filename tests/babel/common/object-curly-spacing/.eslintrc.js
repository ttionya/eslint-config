module.exports = {
  rules: {

    /**
     * babel
     * 对象中空格保持一致性
     * @reason 关闭 eslint 使用 babel
     */
    'babel/object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: true,
        objectsInObjects: true,
      },
    ],

    'object-curly-spacing': 'off',
  },
}
