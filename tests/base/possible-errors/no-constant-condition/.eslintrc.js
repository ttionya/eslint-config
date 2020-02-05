module.exports = {
  rules: {

    /**
     * 禁止将常量作为分支条件判断中的条件表达式，但允许作为循环条件判断中的条件表达式
     * @reason 循环中可以根据条件中断循环
     */
    'no-constant-condition': ['error', { checkLoops: false }],
  },
}
