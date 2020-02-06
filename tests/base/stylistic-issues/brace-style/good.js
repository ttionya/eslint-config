const foo = 0

if (foo) { console.log(foo) } else {
  console.error(foo)
}

if (foo) { console.log(foo) } else { console.error(foo) }

function bar() { return true }

function baz() {
  if (foo) return true
}

console.log(bar, baz)
