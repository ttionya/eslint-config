const foo = {}
const bar = {}

if (foo) {
  console.log(foo)
} else if (bar) {
  console.log(bar)
}

if (foo && foo.foo) {
  console.log(foo.foo)
} else if (foo && foo.bar) {
  console.log(foo.bar)
}
