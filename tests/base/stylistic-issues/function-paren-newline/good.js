const foo = function (bar, baz) {
  console.log(bar, baz)
}
const bar = (
  bar,
) => {
  console.log(bar)
}

function baz(
  bar,
  baz,
) {
  console.log(bar, baz)
}

foo(
  function () {
    // do something
  },
)

console.log(bar, baz)
