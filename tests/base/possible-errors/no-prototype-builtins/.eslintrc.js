module.exports = {
  rules: {

    /**
     * 禁止使用 hasOwnProperty, isPrototypeOf 或 propertyIsEnumerable
     * @category Base
     * @reason hasOwnProperty 常用
     */
    'no-prototype-builtins': 'off',
  },
}
