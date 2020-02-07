const bar = {}
const baz = {}

const foo = Object.getPrototypeOf(bar)
Object.setPrototypeOf(bar, baz)

console.log(foo)
