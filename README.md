# eslint-config

一套 ESLint 规则。

## 规则列表

根据项目使用不同的配置：

- [Base](#base)
- [Babel](#babel)

## 使用方法

### Base

基础规则，可用于 NodeJS 环境。

```bash
npm i -D eslint @ttionya/eslint-config
```

```js
/* .eslintrc.js */

module.exports = {
  extends: ['@ttionya/eslint-config/base'],
}
```

### Babel

在 `Base` 规则的基础上，添加了 `Babel` 的支持。

```bash
npm i -D eslint \
         babel-eslint \
         eslint-plugin-babel \
         @ttionya/eslint-config
```

```js
/* .eslintrc.js */

module.exports = {
  extends: ['@ttionya/eslint-config/babel'],
}
```

## FAQ

### 为什么还包含了样式相关的规则而没有交由 Prettier 处理？

当前使用的 Prettier 规则与 ESLint 规则完全兼容。

执行 `lint` 时，Prettier 会对样式进行格式化，之后再由 ESLint 判断是否存在 Prettier 无法正确格式化的代码。

## 参考

- [eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy)

## License

@ttionya/eslint-config is licensed under the MIT license.

Copyright © 2020, ttionya
