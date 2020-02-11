module.exports = {
  rules: {

    'new-cap': 'off',

    /**
     * babel
     * new 后面的类名必须首字母大写
     */
    'babel/new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: false,
        properties: true,
      },
],
  },
}
