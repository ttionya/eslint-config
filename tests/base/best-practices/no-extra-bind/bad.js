// errorCount 1

const foo = () => {}
const bar = 1;

(function () {
  foo()
}.bind(bar))
