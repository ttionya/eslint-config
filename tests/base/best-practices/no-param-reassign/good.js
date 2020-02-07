function foo(bar) {
  const otherBar = bar || ''

  console.log(otherBar)
}

function bar(bar) {
  bar.bar = bar.bar || ''
}

foo(1)
bar({})
