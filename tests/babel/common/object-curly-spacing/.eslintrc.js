module.exports = {
  rules: {

    /**
     * 对象中空格保持一致性
     * @category Babel
     * @reason 关闭 Base 使用 Babel
     * @fixable
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
