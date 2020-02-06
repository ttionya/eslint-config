/**
 * ESLint 规则
 * https://github.com/ttionya/eslint-config
 *
 * Author: ttionya <my@ttionya.com>
 * Version: 0.1.4
 *
 * 此文件是由脚本 scripts/build.js 自动生成
 */
module.exports = {
  root: true,

  env: {
    es6: true,
    commonjs: true,
    node: true,
    mocha: true,
    jasmine: true,
    jest: true,
  },

  extends: ['eslint:recommended'],

  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2019,
    ecmaFeatures: {
      // 不允许 return 语句出现在 global 环境下
      globalReturn: false,
      // 使用全局严格模式
      impliedStrict: true,
      // 启用 jsx 支持
      jsx: true,
    },
  },

  // 标示行内注释未使用的情况
  reportUnusedDisableDirectives: true,

  rules: {
    /**
     * 禁止直接使用 Buffer 构造函数
     * @reason Buffer 已被废弃，使用其方法代替
     */
    'no-buffer-constructor': 'error',

    /**
     * 禁止直接 new require('foo')
     */
    'no-new-require': 'error',

    /**
     * 禁止在条件表达式中使用赋值语句，除非这个赋值语句被括号包起来了
     */
    'no-cond-assign': ['error', 'except-parens'],

    /**
     * 禁止将常量作为分支条件判断中的条件表达式，但允许作为循环条件判断中的条件表达式
     * @reason 循环中可以根据条件中断循环
     */
    'no-constant-condition': [
      'error',
      {
        checkLoops: false,
      },
    ],

    /**
     * 禁止 if else 的条件判断中出现重复的条件
     */
    'no-dupe-else-if': 'error',

    /**
     * 禁止出现空代码块，但允许 catch 为空代码块
     */
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true,
      },
    ],

    /**
     * 禁止对导入的模块进行赋值
     */
    'no-import-assign': 'error',

    /**
     * 禁止在 if 代码块内出现函数声明和用 var 定义变量
     * @reason var 定义的变量存在变量提升
     */
    'no-inner-declarations': ['error', 'both'],

    /**
     * 禁止使用特殊空白符（比如全角空格），除非是出现在字符串、正则表达式或模版字符串中
     */
    'no-irregular-whitespace': [
      'error',
      {
        skipStrings: true,
        skipComments: false,
        skipRegExps: true,
        skipTemplates: true,
      },
    ],

    /**
     * 禁止使用 hasOwnProperty, isPrototypeOf 或 propertyIsEnumerable
     * @reason hasOwnProperty 常用
     */
    'no-prototype-builtins': 'off',

    /**
     * 禁止 setter 有返回值
     */
    'no-setter-return': 'error',

    /**
     * 禁止在普通字符串中出现模版字符串里的变量形式
     * @reason 防止出错
     */
    'no-template-curly-in-string': 'error',

    /**
     * 根据情况使用严格模式
     */
    strict: ['error', 'safe'],

    /**
     * 在数组开括号后和闭括号前强制换行
     */
    'array-bracket-newline': ['error', 'consistent'],

    /**
     * 强制数组方括号中使用一致的空格
     */
    'array-bracket-spacing': ['error', 'never'],

    /**
     * 强制数组元素间出现换行
     */
    'array-element-newline': ['error', 'consistent'],

    /**
     * 强制在代码块中开括号前和闭括号后有空格
     */
    'block-spacing': ['error', 'always'],

    /**
     * 大括号风格要求
     */
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],

    /**
     * 要求尾逗号，除非在一行内
     */
    'comma-dangle': ['error', 'always-multiline'],

    /**
     * 强制在逗号周围使用空格
     */
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],

    /**
     * 强制逗号在末尾
     */
    'comma-style': ['error', 'last'],

    /**
     * 强制在计算的属性的方括号中不加空格
     */
    'computed-property-spacing': ['error', 'never'],

    /**
     * 文件末尾需要空行
     */
    'eol-last': ['error', 'always'],

    /**
     * 禁止在函数标识符和其调用之间有空格
     */
    'func-call-spacing': ['error', 'never'],

    /**
     * 强制函数调用参数换行方式
     */
    'function-call-argument-newline': ['error', 'consistent'],

    /**
     * 强制在函数括号内使用一致的换行
     */
    'function-paren-newline': ['error', 'multiline-arguments'],

    /**
     * 禁止将 undefined 赋值给变量
     */
    'no-undef-init': 'error',

    /**
     * 变量必须先定义后使用
     * @reason 存在函数后调用的问题
     */
    'no-use-before-define': [
      'error',
      {
        variables: false,
        functions: false,
        classes: false,
      },
    ],
  },
}
