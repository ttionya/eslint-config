// errorCount 2

const bar = {}
const baz = {}
const foo = bar.__proto__

bar.__proto__ = baz

console.log(foo)
