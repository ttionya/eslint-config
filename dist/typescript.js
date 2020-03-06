/**
 * ESLint 规则
 * https://github.com/ttionya/eslint-config
 *
 * Author: ttionya <my@ttionya.com>
 * Version: 0.3.2
 *
 * 此文件是由脚本 scripts/build.js 自动生成
 */
module.exports = {
  root: true,

  extends: ['plugin:@typescript-eslint/recommended'],

  plugins: ['@typescript-eslint'],

  parser: '@typescript-eslint/parser',

  rules: {
    /**
     * 重载的函数必须写在一起
     * @category TypeScript
     * @reason 增加可读性
     */
    '@typescript-eslint/adjacent-overload-signatures': 'error',

    /**
     * 限制数组类型必须使用 Array<T> 或 T[]
     * @category TypeScript
     * @reason 不启用
     * @fixable
     */
    '@typescript-eslint/array-type': 'off',

    /**
     * 禁止对没有 then 方法的对象使用 await
     * @category TypeScript
     * @reason requires types information 报错
     * @requires-types-information
     *
     * @reason 可以用 Promise.resolve() 包一层
     * @configure 'error'
     */
    '@typescript-eslint/await-thenable': 'off',

    /**
     * 禁止使用 // @ts-ignore // @ts-nocheck // @ts-check
     * @category TypeScript
     */
    '@typescript-eslint/ban-ts-comment': 'off',

    /**
     * 禁止使用指定的类型
     * @category TypeScript
     * @fixable
     */
    '@typescript-eslint/ban-types': 'off',

    /**
     * 类型断言必须使用 as Type，禁止使用 <Type>，禁止对对象字面量进行类型断言（断言成 any 是允许的）
     * @category TypeScript
     * @reason <Type> 容易被理解为 jsx
     */
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'never',
      },
    ],

    /**
     * 优先使用 interface 而不是 type
     * @category TypeScript
     * @reason interface 可以 implement, extend 和 merge
     * @fixable
     */
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    /**
     * 函数返回值必须与声明的类型一致
     * @category TypeScript
     */
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: false,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],

    /**
     * 必须设置类的成员的可访问性
     * @category TypeScript
     * @reason 将不需要公开的成员设为私有的，可以增强代码的可理解性，对文档输出也很友好
     * @fixable
     */
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: {
          accessors: 'explicit',
          constructors: 'no-public',
          methods: 'explicit',
          properties: 'off',
          parameterProperties: 'explicit',
        },
      },
    ],

    /**
     * 导出的函数或类中的 public 方法必须定义输入输出参数的类型
     * @category TypeScript
     */
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    /**
     * interface 或 type 等统一不要分隔符
     * @category TypeScript
     * @fixable
     */
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false,
        },
        singleline: {
          requireLast: false,
        },
      },
    ],

    /**
     * 禁止使用 namespace 来定义命名空间
     * @category TypeScript
     * @reason 使用 ES6 Module 代替，但是允许 declare namespace ... {} 这样定义外部命名空间
     */
    '@typescript-eslint/no-namespace': [
      'error',
      {
        allowDeclarations: true,
        allowDefinitionFiles: true,
      },
    ],

    /**
     * interface 首字母必须以 I 开头
     * @category TypeScript
     * @reason 增加可识别性
     */
    '@typescript-eslint/interface-name-prefix': [
      'error',
      {
        prefixWithI: 'always',
      },
    ],

    /**
     * 已定义的变量必须使用
     * @category TypeScript
     * @reason 关闭 eslint 使用 typescript
     */
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        caughtErrors: 'none',
      },
    ],

    /**
     * 已定义的变量必须使用
     * @category TypeScript
     * @reason 关闭 eslint 使用 typescript
     */
    'no-unused-vars': 'off',
  },
}
