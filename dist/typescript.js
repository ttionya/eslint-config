/**
 * ESLint 规则
 * https://github.com/ttionya/eslint-config
 *
 * Author: ttionya <my@ttionya.com>
 * Version: 1.0.0
 *
 * 此文件是由脚本 scripts/build.js 自动生成
 */
module.exports = {
  root: true,

  parser: '@typescript-eslint/parser',

  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],

      extends: ['plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended'],

      plugins: ['@typescript-eslint'],

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
         * @fixable
         */
        '@typescript-eslint/array-type': 'off',

        /**
         * 禁止对没有 then 方法的对象使用 await
         * @category TypeScript
         * @reason 可以用 Promise.resolve() 包一层
         * @requires-types-information
         */
        '@typescript-eslint/await-thenable': 'error',

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
         * 指定类成员的排序规则
         * @category TypeScript
         * @reason 优先级：
         *          1. static > instance
         *          2. field > constructor > method
         *          3. public > protected > private
         */
        '@typescript-eslint/member-ordering': [
          'error',
          {
            default: [
              'public-static-field',
              'protected-static-field',
              'private-static-field',
              'static-field',
              'public-static-method',
              'protected-static-method',
              'private-static-method',
              'static-method',
              'public-instance-field',
              'protected-instance-field',
              'private-instance-field',
              'public-field',
              'protected-field',
              'private-field',
              'instance-field',
              'field',
              'constructor',
              'public-instance-method',
              'protected-instance-method',
              'private-instance-method',
              'public-method',
              'protected-method',
              'private-method',
              'instance-method',
              'method',
            ],
          },
        ],

        /**
         * 限制各种变量或类型的命名规则
         * @category TypeScript
         * @requires-types-information
         */
        '@typescript-eslint/naming-convention': 'off',

        /**
         * 要求更有意义的 toString()
         * @category TypeScript
         * @requires-types-information
         */
        '@typescript-eslint/no-base-to-string': 'off',

        /**
         * 禁止 delete 时传入的 key 是动态的
         * @category TypeScript
         * @fixable
         */
        '@typescript-eslint/no-dynamic-delete': 'off',

        /**
         * 禁止定义空的接口
         * @category TypeScript
         * @fixable
         */
        '@typescript-eslint/no-empty-interface': [
          'error',
          {
            allowSingleExtends: true,
          },
        ],

        /**
         * 禁止使用 any
         * @category TypeScript
         * @fixable
         */
        '@typescript-eslint/no-explicit-any': 'off',

        /**
         * 禁止多余的 non-null 断言
         * @category TypeScript
         * @fixable
         */
        '@typescript-eslint/no-extra-non-null-assertion': 'error',

        /**
         * 禁止定义没必要的类，比如只有静态方法的类
         * @category TypeScript
         */
        '@typescript-eslint/no-extraneous-class': [
          'error',
          {
            allowConstructorOnly: false,
            allowEmpty: false,
            allowStaticOnly: false,
            allowWithDecorator: false,
          },
        ],

        /**
         * 禁止调用 Promise 时没有处理异常情况
         * @category TypeScript
         * @requires-types-information
         */
        '@typescript-eslint/no-floating-promises': 'off',

        /**
         * 禁止对 array 使用 for in 循环
         * @category TypeScript
         * @requires-types-information
         */
        '@typescript-eslint/no-for-in-array': 'error',

        /**
         * 禁止使用类似 eval 的写法
         * @category TypeScript
         * @reason 关闭 Base 使用 TypeScript
         * @requires-types-information
         */
        '@typescript-eslint/no-implied-eval': 'error',

        /**
         * 禁止使用类似 eval 的写法
         * @category TypeScript
         * @reason 关闭 Base 使用 TypeScript
         * @requires-types-information
         */
        'no-implied-eval': 'off',

        /**
         * 禁止给一个初始化时直接赋值为 number, string 的变量显式的声明类型
         * @category TypeScript
         * @reason 可以简化代码
         * @fixable
         */
        '@typescript-eslint/no-inferrable-types': 'error',

        /**
         * 禁止在接口中定义 constructor，或在类中定义 new
         * @category TypeScript
         */
        '@typescript-eslint/no-misused-new': 'error',

        /**
         * 避免错误的使用 Promise
         * @category TypeScript
         * @requires-types-information
         */
        '@typescript-eslint/no-misused-promises': [
          'error',
          {
            checksConditionals: true,
            checksVoidReturn: true,
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
         * 禁止在 optional chaining 之后使用 non-null 断言（感叹号）
         * @category TypeScript
         * @reason optional chaining 后面的属性一定是非空的
         */
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

        /**
         * 禁止使用 non-null 断言（感叹号）
         * @category TypeScript
         * @reason 使用 non-null 断言时就已经清楚了风险
         */
        '@typescript-eslint/no-non-null-assertion': 'off',

        /**
         * 禁止给类的构造函数的参数添加修饰符
         * @category TypeScript
         * @reason 单独列出清晰明了
         */
        '@typescript-eslint/no-parameter-properties': 'error',

        /**
         * 禁止使用 require
         * @category TypeScript
         * @reason 统一使用 import 来引入模块，特殊情况使用单行注释允许 require 引入
         */
        '@typescript-eslint/no-require-imports': 'error',

        /**
         * 禁止将 this 赋值给其他变量，除非是解构赋值和 self
         * @category TypeScript
         */
        '@typescript-eslint/no-this-alias': [
          'error',
          {
            allowDestructuring: true,
            allowedNames: ['self'],
          },
        ],

        /**
         * 禁止 throw 字面量，必须 throw 一个 Error 对象
         * @category TypeScript
         * @requires-types-information
         */
        '@typescript-eslint/no-throw-literal': 'off',

        /**
         * 禁止使用类型别名
         * @category TypeScript
         */
        '@typescript-eslint/no-type-alias': 'off',

        /**
         * 测试表达式中的布尔类型禁止与 true 或 false 直接比较
         * @category TypeScript
         * @reason 有时候会出现要求完全等于 true 或 false 的情况
         * @requires-types-information
         * @fixable
         */
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',

        /**
         * 条件表达式禁止是永远为真（或永远为假）的
         * @category TypeScript
         * @requires-types-information
         * @fixable
         */
        '@typescript-eslint/no-unnecessary-condition': 'off',

        /**
         * 在命名空间中，可以直接使用内部变量，不需要添加命名空间前缀
         * @category TypeScript
         * @requires-types-information
         * @fixable
         */
        '@typescript-eslint/no-unnecessary-qualifier': 'off',

        /**
         * 禁止范型的类型有默认值时，将范型设置为该默认值
         * @category TypeScript
         * @requires-types-information
         * @fixable
         */
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',

        /**
         * 禁止无用的类型断言
         * @category TypeScript
         * @requires-types-information
         * @fixable
         */
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',

        /**
         * 禁止不安全的函数调用
         * @category TypeScript
         * @requires-types-information
         */
        '@typescript-eslint/no-unsafe-call': 'off',

        /**
         * 禁止不安全的属性访问
         * @category TypeScript
         * @requires-types-information
         */
        '@typescript-eslint/no-unsafe-member-access': 'off',

        /**
         * 禁止函数返回 any 类型
         * @category TypeScript
         * @requires-types-information
         */
        '@typescript-eslint/no-unsafe-return': 'off',

        /**
         * 禁止已定义的变量未使用
         * @category TypeScript
         * @requires-types-information
         */
        '@typescript-eslint/no-unused-vars-experimental': 'off',

        /**
         * 禁止使用 require 来引入模块
         * @category TypeScript
         * @reason no-require-imports 规则已经约束了 require
         */
        '@typescript-eslint/no-var-requires': 'off',

        /**
         * 使用 as const 替代 as 'bar'
         * @category TypeScript
         * @fixable
         */
        '@typescript-eslint/prefer-as-const': 'error',

        /**
         * 使用 for 循环遍历数组时，如果索引仅用于获取成员，则必须使用 for of 循环替代 for 循环
         * @category TypeScript
         * @reason for of 循环更加易读
         */
        '@typescript-eslint/prefer-for-of': 'error',

        /**
         * 使用函数类型别名替代包含函数调用声明的接口
         * @category TypeScript
         * @fixable
         */
        '@typescript-eslint/prefer-function-type': 'error',

        /**
         * 使用 includes 而不是 indexOf
         * @category TypeScript
         * @requires-types-information
         * @fixable
         */
        '@typescript-eslint/prefer-includes': 'off',

        /**
         * 禁止使用 module 来定义命名空间
         * @category TypeScript
         * @reason module 已成为 js 的关键字
         * @fixable
         */
        '@typescript-eslint/prefer-namespace-keyword': 'error',

        /**
         * 使用 ?? 替代 ||
         * @category TypeScript
         * @requires-types-information
         * @fixable
         */
        '@typescript-eslint/prefer-nullish-coalescing': 'off',

        /**
         * 使用 optional chaining 替代 &&
         * @category TypeScript
         * @fixable
         */
        '@typescript-eslint/prefer-optional-chain': 'error',

        /**
         * 私有变量如果没有在构造函数外被赋值，则必须设为 readonly
         * @category TypeScript
         * @requires-types-information
         * @fixable
         */
        '@typescript-eslint/prefer-readonly': 'off',

        /**
         * 传入的参数要设置为只读属性
         * @category TypeScript
         * @requires-types-information
         */
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',

        /**
         * 使用 RegExp#exec 而不是 String#match
         * @category TypeScript
         * @requires-types-information
         */
        '@typescript-eslint/prefer-regexp-exec': 'error',

        /**
         * 使用 String#startsWith 而不是其他方式
         * @category TypeScript
         * @requires-types-information
         * @fixable
         */
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',

        /**
         * async 函数的返回值必须是 Promise
         * @category TypeScript
         * @requires-types-information
         */
        '@typescript-eslint/promise-function-async': 'off',

        /**
         * 使用 sort 时必须传入比较函数
         * @category TypeScript
         * @requires-types-information
         */
        '@typescript-eslint/require-array-sort-compare': 'error',

        /**
         * 使用加号时，两者必须同为数字或同为字符串
         * @category TypeScript
         * @requires-types-information
         */
        '@typescript-eslint/restrict-plus-operands': [
          'error',
          {
            checkCompoundAssignments: true,
          },
        ],

        /**
         * 模版字符串中的变量类型必须是字符串
         * @category TypeScript
         * @requires-types-information
         */
        '@typescript-eslint/restrict-template-expressions': [
          'error',
          {
            allowNumber: true,
            allowBoolean: true,
            allowNullable: true,
          },
        ],

        /**
         * 条件判断必须传入布尔值
         * @category TypeScript
         * @requires-types-information
         */
        '@typescript-eslint/strict-boolean-expressions': 'off',

        /**
         * 使用联合类型作为 switch 的对象时，必须包含每一个类型的 case
         * @category TypeScript
         * @requires-types-information
         */
        '@typescript-eslint/switch-exhaustiveness-check': 'off',

        /**
         * 禁止使用三斜杠导入文件
         * @category TypeScript
         * @reason 三斜杠是已废弃的语法，但在类型声明文件中还是可以使用的
         */
        '@typescript-eslint/triple-slash-reference': [
          'error',
          {
            path: 'never',
            types: 'always',
            lib: 'always',
          },
        ],

        /**
         * 类型注释周围含有空格
         * @category TypeScript
         * @fixable
         */
        '@typescript-eslint/type-annotation-spacing': [
          'error',
          {
            before: false,
            after: true,
            overrides: {
              arrow: {
                before: true,
              },
            },
          },
        ],

        /**
         * interface 和 type 定义时必须声明成员的类型
         * @category TypeScript
         */
        '@typescript-eslint/typedef': [
          'error',
          {
            arrayDestructuring: false,
            arrowParameter: false,
            memberVariableDeclaration: false,
            objectDestructuring: false,
            parameter: false,
            propertyDeclaration: true,
            variableDeclaration: false,
            variableDeclarationIgnoreFunction: false,
          },
        ],

        /**
         * 方法调用时需要绑定到正确的 this 上
         * @category TypeScript
         * @requires-types-information
         */
        '@typescript-eslint/unbound-method': 'off',

        /**
         * 函数重载时，若能通过联合类型将两个函数的类型声明合为一个，则使用联合类型而不是两个函数声明
         * @category TypeScript
         */
        '@typescript-eslint/unified-signatures': 'error',

        /**
         * 大括号风格要求
         * @category TypeScript
         * @reason 关闭 Base 使用 TypeScript
         * @fixable
         */
        '@typescript-eslint/brace-style': [
          'error',
          '1tbs',
          {
            allowSingleLine: true,
          },
        ],

        /**
         * 大括号风格要求
         * @category TypeScript
         * @reason 关闭 Base 使用 TypeScript
         * @fixable
         */
        'brace-style': 'off',

        /**
         * 在逗号后使用空格
         * @category TypeScript
         * @reason 关闭 Base 使用 TypeScript
         * @fixable
         */
        '@typescript-eslint/comma-spacing': [
          'error',
          {
            before: false,
            after: true,
          },
        ],

        /**
         * 在逗号后使用空格
         * @category TypeScript
         * @reason 关闭 Base 使用 TypeScript
         * @fixable
         */
        'comma-spacing': 'off',

        /**
         * 强制可选或带默认值的参数在最后
         * @category TypeScript
         */
        '@typescript-eslint/default-param-last': 'off',

        /**
         * 禁止在函数标识符和其调用之间有空格
         * @category TypeScript
         * @reason 关闭 Base 使用 TypeScript
         * @fixable
         */
        '@typescript-eslint/func-call-spacing': ['error', 'never'],

        /**
         * 禁止在函数标识符和其调用之间有空格
         * @category TypeScript
         * @reason 关闭 Base 使用 TypeScript
         * @fixable
         */
        'func-call-spacing': 'off',

        /**
         * 设置缩进
         * @category TypeScript
         * @reason 不另外设置，使用 EditorConfig 的设置
         * @fixable
         */
        '@typescript-eslint/indent': 'off',

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
         * 禁止使用 Array 构造函数
         * @category TypeScript
         * @reason 关闭 Base 使用 TypeScript
         * @fixable
         */
        '@typescript-eslint/no-array-constructor': 'error',

        /**
         * 禁止使用 Array 构造函数
         * @category TypeScript
         * @reason 关闭 Base 使用 TypeScript
         * @fixable
         */
        'no-array-constructor': 'off',

        /**
         * 禁止类中存在重复的属性和方法
         * @category TypeScript
         * @reason 关闭 Base 使用 TypeScript
         */
        '@typescript-eslint/no-dupe-class-members': 'error',

        /**
         * 禁止类中存在重复的属性和方法
         * @category TypeScript
         * @reason 关闭 Base 使用 TypeScript
         */
        'no-dupe-class-members': 'off',

        /**
         * 不允许空方法，除非带访问控制的构造函数
         * @category TypeScript
         * @reason 关闭 Base 使用 TypeScript
         */
        '@typescript-eslint/no-empty-function': 'error',

        /**
         * 不允许空方法，除非带访问控制的构造函数
         * @category TypeScript
         * @reason 关闭 Base 使用 TypeScript
         */
        'no-empty-function': 'off',

        /**
         * 只允许使用必要的括号
         * @category TypeScript
         * @reason 关闭 Base 使用 TypeScript
         * @fixable
         */
        '@typescript-eslint/no-extra-parens': [
          'error',
          'all',
          {
            enforceForArrowConditionals: false,
          },
        ],

        /**
         * 只允许使用必要的括号
         * @category TypeScript
         * @reason 关闭 Base 使用 TypeScript
         * @fixable
         */
        'no-extra-parens': 'off',

        /**
         * 禁止多余的分号
         * @category TypeScript
         * @reason 不允许使用分号
         * @fixable
         */
        '@typescript-eslint/no-extra-semi': 'error',

        /**
         * 禁止多余的分号
         * @category TypeScript
         * @reason 不允许使用分号
         * @fixable
         */
        'no-extra-semi': 'off',

        /**
         * 禁止魔法数字
         * @category TypeScript
         * @reason 不处理魔法数字
         */
        '@typescript-eslint/no-magic-numbers': 'off',

        /**
         * 禁止魔法数字
         * @category TypeScript
         * @reason 不处理魔法数字
         */
        'no-magic-numbers': 'off',

        /**
         * 禁止无用的表达式
         * @category TypeScript
         * @reason 关闭 Base 使用 TypeScript
         */
        '@typescript-eslint/no-unused-expressions': [
          'error',
          {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true,
          },
        ],

        /**
         * 禁止无用的表达式
         * @category TypeScript
         * @reason 关闭 Base 使用 TypeScript
         */
        'no-unused-expressions': 'off',

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

        /**
         * 变量必须先定义后使用
         * @category TypeScript
         * @reason 关闭 Base 使用 TypeScript
         * @reason 存在函数后调用的问题
         */
        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            variables: false,
            functions: false,
            classes: false,
            enums: false,
            typedefs: false,
          },
        ],

        /**
         * 变量必须先定义后使用
         * @category TypeScript
         * @reason 关闭 Base 使用 TypeScript
         * @reason 存在函数后调用的问题
         */
        'no-use-before-define': 'off',

        /**
         * 禁止出现没必要的 constructor
         * @category TypeScript
         * @reason 关闭 Base 使用 TypeScript
         */
        '@typescript-eslint/no-useless-constructor': 'error',

        /**
         * 禁止出现没必要的 constructor
         * @category TypeScript
         * @reason 关闭 Base 使用 TypeScript
         */
        'no-useless-constructor': 'off',

        /**
         * 要求使用单引号，但是也可以直接使用反引号
         * @category TypeScript
         * @reason 关闭 Base 使用 TypeScript
         * @fixable
         */
        '@typescript-eslint/quotes': [
          'error',
          'single',
          {
            allowTemplateLiterals: true,
          },
        ],

        /**
         * 要求使用单引号，但是也可以直接使用反引号
         * @category TypeScript
         * @reason 关闭 Base 使用 TypeScript
         * @fixable
         */
        quotes: 'off',

        /**
         * async 函数中必须存在 await 语句
         * @category TypeScript
         */
        '@typescript-eslint/require-await': 'off',

        /**
         * async 函数中必须存在 await 语句
         * @category TypeScript
         */
        'require-await': 'off',

        /**
         * async 函数必须返回 await
         * @category TypeScript
         * @reason 看起来和 Base 的 no-return-await 功能一致
         * @fixable
         */
        '@typescript-eslint/return-await': 'off',

        /**
         * 不使用分号
         * @category TypeScript
         * @reason 关闭 Base 使用 TypeScript
         * @fixable
         */
        '@typescript-eslint/semi': ['error', 'never'],

        /**
         * 不使用分号
         * @category TypeScript
         * @reason 关闭 Base 使用 TypeScript
         * @fixable
         */
        semi: 'off',

        /**
         * function 的左括号之前使用空格，除非是命名函数
         * @category TypeScript
         * @reason 关闭 Base 使用 TypeScript
         * @fixable
         */
        '@typescript-eslint/space-before-function-paren': [
          'error',
          {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
          },
        ],

        /**
         * function 的左括号之前使用空格，除非是命名函数
         * @category TypeScript
         * @reason 关闭 Base 使用 TypeScript
         * @fixable
         */
        'space-before-function-paren': 'off',
      },
    },
  ],
}
