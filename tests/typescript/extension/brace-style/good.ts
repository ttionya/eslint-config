/* eslint-disable @typescript-eslint/no-unused-vars */

export default 1

const foo = 0

if (foo) { console.log(foo) } else {
  console.error(foo)
}

if (foo) { console.log(foo) } else { console.error(foo) }

function bar(): boolean { return true }

function baz(): boolean | void {
  if (foo) return true
}
