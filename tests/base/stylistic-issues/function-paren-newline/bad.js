// errorCount 5

const foo = function (bar,
  baz) {
    console.log(bar, baz)
}

function bar(
  bar, baz,
) {
  console.log(bar, baz)
}

foo(
  function () {
    // do something
  })

console.log(bar)
