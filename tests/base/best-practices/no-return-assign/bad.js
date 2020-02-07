// errorCount 1

let bar = 0

function foo() {
  return (bar = 1)
}

foo()
console.log(bar)
