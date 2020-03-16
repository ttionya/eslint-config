/**
 * ESLint 规则
 * https://github.com/ttionya/eslint-config
 *
 * Author: ttionya <my@ttionya.com>
 * Version: 1.0.1
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

    /**
     * 数组的方法除了 forEach 之外，回调函数必须有返回值
     * @category Base
     */
    'array-callback-return': 'error',

    /**
     * 控制语句使用一致的括号风格
     * @category Base
     * @fixable
     */
    curly: ['error', 'multi-line', 'consistent'],

    /**
     * switch 必须使用 default，即使为空也要有注释
     * @category Base
     */
    'default-case': 'error',

    /**
     * 点号之前有一致的换行
     * @category Base
     * @fixable
     */
    'dot-location': ['error', 'property'],

    /**
     * 必须使用 === 或 !==，禁止使用 == 或 !=
     * @category Base
     * @fixable
     */
    eqeqeq: ['error', 'always'],

    /**
     * setter 和 getter 必须写在一起
     * @category Base
     */
    'grouped-accessor-pairs': 'error',

    /**
     * 禁止使用 caller 或 callee
     * @category Base
     * @reason 已废弃的语法
     */
    'no-caller': 'error',

    /**
     * 禁止在构造函数中返回值
     * @category Base
     */
    'no-constructor-return': 'error',

    /**
     * 禁止使用 foo == null，必须使用 foo === null
     * @category Base
     */
    'no-eq-null': 'error',

    /**
     * 禁止使用 eval
     * @category Base
     */
    'no-eval': 'error',

    /**
     * 禁止修改原生对象
     * @category Base
     * @reason 修改原生对象可能会与将来版本的 js 冲突
     */
    'no-extend-native': 'error',

    /**
     * 禁止出现没必要的 bind
     * @category Base
     * @fixable
     */
    'no-extra-bind': 'error',

    /**
     * 禁止数字字面量中使用前导和末尾小数点
     * @category Base
     * @fixable
     */
    'no-floating-decimal': 'error',

    /**
     * 禁止在 setTimeout 或 setInterval 中传入字符串
     * @category Base
     */
    'no-implied-eval': 'error',

    /**
     * 禁止在类之外的地方使用 this
     * @category Base
     * @reason 只允许在 class 中使用 this
     */
    'no-invalid-this': 'error',

    /**
     * 禁止使用 __iterator__
     * @category Base
     * @reason __iterator__ 是一个已废弃的属性，使用 [Symbol.iterator] 替代
     */
    'no-iterator': 'error',

    /**
     * 禁止使用 label
     * @category Base
     */
    'no-labels': 'error',

    /**
     * 禁止使用没必要的 {} 作为代码块
     * @category Base
     */
    'no-lone-blocks': 'error',

    /**
     * 禁止使用多个空格，除了行尾注释和对象属性
     * @category Base
     * @fixable
     */
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true,
        exceptions: {
          Property: true,
        },
      },
    ],

    /**
     * 禁止使用 \ 来换行字符串
     * @category Base
     */
    'no-multi-str': 'error',

    /**
     * 禁止直接 new 一个类而不赋值
     * @category Base
     * @reason new 应该作为创建一个类的实例的方法，所以不能不赋值
     */
    'no-new': 'error',

    /**
     * 禁止使用 new Function
     * @category Base
     * @reason 这和 eval 是等价的
     */
    'no-new-func': 'error',

    /**
     * 禁止使用 new 来生成 String, Number 或 Boolean
     * @category Base
     */
    'no-new-wrappers': 'error',

    /**
     * 禁止对函数的参数重新赋值
     * @category Base
     */
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],

    /**
     * 禁止使用 __proto__
     * @category Base
     * @reason __proto__ 是已废弃的语法
     */
    'no-proto': 'error',

    /**
     * 禁止在 return 语句里赋值
     * @category Base
     */
    'no-return-assign': ['error', 'always'],

    /**
     * 禁止在 return 语句里使用 await
     * @category Base
     */
    'no-return-await': 'error',

    /**
     * 禁止将自己与自己比较
     * @category Base
     */
    'no-self-compare': 'error',

    /**
     * 禁止 throw 字面量，必须 throw 一个 Error 对象
     * @category Base
     */
    'no-throw-literal': 'error',

    /**
     * 禁止无用的表达式
     * @category Base
     */
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],

    /**
     * 禁止出现没必要的 call 或 apply
     * @category Base
     */
    'no-useless-call': 'error',

    /**
     * 禁止出现没必要的字符串连接
     * @category Base
     */
    'no-useless-concat': 'error',

    /**
     * 禁止没必要的 return
     * @category Base
     * @fixable
     */
    'no-useless-return': 'error',

    /**
     * 禁止使用 void
     * @category Base
     */
    'no-void': 'error',

    /**
     * 必须使用 if (foo === 5) 而不是 if (5 === foo)
     * @category Base
     * @fixable
     */
    yoda: [
      'error',
      'never',
      {
        onlyEquality: true,
      },
    ],

    /**
     * 箭头函数的参数必须使用圆括号
     * @category Base
     * @fixable
     */
    'arrow-parens': ['error', 'always'],

    /**
     * 箭头函数箭头周围需要空格
     * @category Base
     * @fixable
     */
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],

    /**
     * Generator * 靠近名称一侧
     * @category Base
     * @fixable
     */
    'generator-star-spacing': [
      'error',
      {
        before: true,
        after: false,
      },
    ],

    /**
     * 防止箭头函数的箭头混淆代码，需要使用圆括号包裹代码
     * @category Base
     * @fixable
     */
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true,
      },
    ],

    /**
     * 禁止重复导入模块
     * @category Base
     */
    'no-duplicate-imports': 'error',

    /**
     * 禁止出现没必要的计算键名
     * @category Base
     * @fixable
     */
    'no-useless-computed-key': 'error',

    /**
     * 禁止出现没必要的 constructor
     * @category Base
     */
    'no-useless-constructor': 'error',

    /**
     * 禁止解构赋值时出现同样名字的的重命名，比如 let { foo: foo } = bar
     * @category Base
     * @fixable
     */
    'no-useless-rename': 'error',

    /**
     * 禁止使用 var
     * @category Base
     * @fixable
     */
    'no-var': 'error',

    /**
     * ... 展开符与变量名之间不允许空格
     * @category Base
     * @fixable
     */
    'rest-spread-spacing': ['error', 'never'],

    /**
     * 创建 Symbol 时必须传入参数
     * @category Base
     */
    'symbol-description': 'error',

    /**
     * yield * 靠近函数一侧
     * @category Base
     * @fixable
     */
    'yield-star-spacing': [
      'error',
      {
        before: true,
        after: false,
      },
    ],

    /**
     * 禁止直接使用 Buffer 构造函数
     * @category Base
     * @reason Buffer 已被废弃，使用其方法代替
     */
    'no-buffer-constructor': 'error',

    /**
     * 禁止直接 new require('foo')
     * @category Base
     */
    'no-new-require': 'error',

    /**
     * 禁止在条件表达式中使用赋值语句，除非这个赋值语句被括号包起来了
     * @category Base
     */
    'no-cond-assign': ['error', 'except-parens'],

    /**
     * 禁止将常量作为分支条件判断中的条件表达式，但允许作为循环条件判断中的条件表达式
     * @category Base
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
     * @category Base
     */
    'no-dupe-else-if': 'error',

    /**
     * 禁止出现空代码块，但允许 catch 为空代码块
     * @category Base
     */
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true,
      },
    ],

    /**
     * 禁止对导入的模块进行赋值
     * @category Base
     */
    'no-import-assign': 'error',

    /**
     * 禁止在 if 代码块内出现函数声明和用 var 定义变量
     * @category Base
     * @reason var 定义的变量存在变量提升
     */
    'no-inner-declarations': ['error', 'both'],

    /**
     * 禁止使用特殊空白符（比如全角空格），除非是出现在字符串、正则表达式或模版字符串中
     * @category Base
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
     * @category Base
     * @reason hasOwnProperty 常用
     */
    'no-prototype-builtins': 'off',

    /**
     * 禁止 setter 有返回值
     * @category Base
     */
    'no-setter-return': 'error',

    /**
     * 禁止在普通字符串中出现模版字符串里的变量形式
     * @category Base
     * @reason 防止出错
     */
    'no-template-curly-in-string': 'error',

    /**
     * 根据情况使用严格模式
     * @category Base
     * @fixable
     */
    strict: ['error', 'safe'],

    /**
     * 在数组开括号后和闭括号前强制换行
     * @category Base
     * @fixable
     */
    'array-bracket-newline': ['error', 'consistent'],

    /**
     * 数组方括号中前后不使用空格
     * @category Base
     * @fixable
     */
    'array-bracket-spacing': ['error', 'never'],

    /**
     * 强制数组元素间出现换行
     * @category Base
     * @fixable
     */
    'array-element-newline': ['error', 'consistent'],

    /**
     * 在代码块中开括号后和闭括号前使用空格
     * @category Base
     * @fixable
     */
    'block-spacing': ['error', 'always'],

    /**
     * 大括号风格要求
     * @category Base
     * @fixable
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
     * @category Base
     * @fixable
     */
    'comma-dangle': ['error', 'always-multiline'],

    /**
     * 在逗号后使用空格
     * @category Base
     * @fixable
     */
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],

    /**
     * 逗号加在末尾
     * @category Base
     * @fixable
     */
    'comma-style': ['error', 'last'],

    /**
     * 在对象属性的方括号中不加空格
     * @category Base
     * @fixable
     */
    'computed-property-spacing': ['error', 'never'],

    /**
     * 文件末尾需要空行
     * @category Base
     * @fixable
     */
    'eol-last': ['error', 'always'],

    /**
     * 禁止在函数标识符和其调用之间有空格
     * @category Base
     * @fixable
     */
    'func-call-spacing': ['error', 'never'],

    /**
     * 强制函数调用参数换行方式
     * @category Base
     * @fixable
     */
    'function-call-argument-newline': ['error', 'consistent'],

    /**
     * 在函数括号内使用一致的换行
     * @category Base
     * @fixable
     */
    'function-paren-newline': ['error', 'multiline-arguments'],

    /**
     * 隐式返回的箭头函数体需写在一行
     * @category Base
     * @fixable
     */
    'implicit-arrow-linebreak': ['error', 'beside'],

    /**
     * 在 JSX 属性中使用双引号
     * @category Base
     * @fixable
     */
    'jsx-quotes': ['error', 'prefer-double'],

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

    /**
     * 关键字周围需要空格
     * @category Base
     * @fixable
     */
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],

    /**
     * 换行使用 LF 而不是 CRLF
     * @category Base
     * @fixable
     */
    'linebreak-style': ['error', 'unix'],

    /**
     * 块级注释之前需要空行
     * @category Base
     * @fixable
     */
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
      },
    ],

    /**
     * 类的成员之间需要空行
     * @category Base
     * @fixable
     */
    'lines-between-class-members': ['error', 'always'],

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

    /**
     * 调用 class 必须添加括号
     * @category Base
     * @fixable
     */
    'new-parens': ['error', 'always'],

    /**
     * 禁止使用 Array 构造函数时传入的参数超过一个
     * @category Base
     * @reason 参数为一个时表示创建一个指定长度的数组，比较常用
     * 参数为多个时表示创建一个指定内容的数组，此时可以用数组字面量实现，不必使用构造函数
     */
    'no-array-constructor': 'error',

    /**
     * 禁止大于连续两个空行
     * @category Base
     * @fixable
     */
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
      },
    ],

    /**
     * 禁止直接 new Object
     * @category Base
     */
    'no-new-object': 'error',

    /**
     * 禁止尾空格
     * @category Base
     * @fixable
     */
    'no-trailing-spaces': 'error',

    /**
     * 禁止属性前有空格
     * @category Base
     * @fixable
     */
    'no-whitespace-before-property': 'error',

    /**
     * 对象中换行保持一致性
     * @category Base
     * @fixable
     */
    'object-curly-newline': [
      'error',
      {
        multiline: true,
        consistent: true,
      },
    ],

    /**
     * 对象中空格保持一致性
     * @category Base
     * @fixable
     */
    'object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: true,
        objectsInObjects: true,
      },
    ],

    /**
     * 对象的属性放在不同的行上或只放到一行上
     * @category Base
     * @fixable
     */
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],

    /**
     * 禁止变量申明时用逗号一次申明多个
     * @category Base
     * @fixable
     */
    'one-var': ['error', 'never'],

    /**
     * 所有换行的操作符需要将操作符放在前面
     * @category Base
     * @fixable
     */
    'operator-linebreak': ['error', 'before'],

    /**
     * 必须使用 ... 而不是 Object.assign，除非 Object.assign 的第一个参数是一个变量
     * @category Base
     * @fixable
     */
    'prefer-object-spread': 'error',

    /**
     * 要求使用单引号，但是也可以直接使用反引号
     * @category Base
     * @fixable
     */
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],

    /**
     * 不使用分号
     * @category Base
     * @fixable
     */
    semi: ['error', 'never'],

    /**
     * 分号后需要有空格
     * @category Base
     * @fixable
     */
    'semi-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],

    /**
     * 必须加分号时，加在末尾
     * @category Base
     * @fixable
     */
    'semi-style': ['error', 'last'],

    /**
     * 语句块之间必须有空格
     * @category Base
     * @fixable
     */
    'space-before-blocks': ['error', 'always'],

    /**
     * function 的左括号之前使用空格，除非是命名函数
     * @category Base
     * @fixable
     */
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],

    /**
     * 圆括号附近不使用空格
     * @category Base
     * @fixable
     */
    'space-in-parens': ['error', 'never'],

    /**
     * 操作符附近使用空格
     * @category Base
     * @fixable
     */
    'space-infix-ops': 'error',

    /**
     * 一元操作符附近，关键字需要空格，符号不需要空格
     * @category Base
     * @fixable
     */
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
      },
    ],

    /**
     * 规范注释空格
     * @category Base
     * @fixable
     */
    'spaced-comment': ['error', 'always'],

    /**
     * switch 冒号周围需要空格
     * @category Base
     * @fixable
     */
    'switch-colon-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],

    /**
     * 禁止将 undefined 赋值给变量
     * @category Base
     * @fixable
     */
    'no-undef-init': 'error',

    /**
     * 变量必须先定义后使用
     * @category Base
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
