module.exports = {
  rules: {

    'object-curly-spacing': 'off',

    /**
     * babel
     * 对象中空格保持一致性
     */
    'babel/object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: true,
        objectsInObjects: true,
      },
    ],
  },
}
