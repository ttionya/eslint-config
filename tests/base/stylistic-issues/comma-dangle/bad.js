// errorCount 3

const foo = {
  foo: 1,
  bar: 2
}
const bar = { foo: 1, bar: 2, }

function baz(
  foo,
  bar
) {
  console.log(foo, bar)
}

console.log(foo, bar, baz)
