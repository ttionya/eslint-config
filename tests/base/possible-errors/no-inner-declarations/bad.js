// errorCount 2

const foo = 1

if (foo) {
  var bar = function () {
    // do something
  }

  console.log(bar)
}

if (foo) {
  function bar() {
    // do something
  }

  console.log(bar)
}
