// errorCount 2
/* eslint-disable no-unused-vars */

const foo = 1

if (foo) {
  var bar = function () {
    // do something
  }
}

if (foo) {
  function bar() {
    // do something
  }
}
