module.exports = {
  rules: {

    /**
     * setter 必须有对应的 getter，getter 可以没有对应的 setter
     * @category Base
     */
    'accessor-pairs': [
      'error',
      {
        setWithoutGet: true,
        getWithoutSet: false,
      },
    ],
  },
}
