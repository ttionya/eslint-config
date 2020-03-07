module.exports = {
  rules: {

    /**
     * 在对象字面量的属性中键和值之间使用空格
     * @category Base
     * @fixable
     */
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'minimum',
      },
    ],
  },
}
