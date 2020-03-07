module.exports = {
  rules: {

    /**
     * new 后面的类名必须首字母大写
     * @category Base
     */
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: false,
        properties: true,
      },
    ],
  },
}
