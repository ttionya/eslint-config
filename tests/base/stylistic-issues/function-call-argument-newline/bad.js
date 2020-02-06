// errorCount 1

function foo(a, b, c) {
  console.log(a, b, c)
}

foo(
  1,
  // eslint-disable-next-line function-paren-newline
  2, 3,
)
