module.exports = {
  rules: {

    /**
     * 对象中空格保持一致性
     */
    'object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: true,
        objectsInObjects: true,
      },
    ],
  },
}
