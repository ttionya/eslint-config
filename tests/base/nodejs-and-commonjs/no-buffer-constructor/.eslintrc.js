module.exports = {
  rules: {

    /**
     * 禁止直接使用 Buffer 构造函数
     * @reason Buffer 已被废弃，使用其方法代替
     */
    'no-buffer-constructor': 'error',
  },
}
