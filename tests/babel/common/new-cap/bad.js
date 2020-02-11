// errorCount 2
/* eslint-disable no-new */

const foo = {
  Bar() {},
}

new foo()
new foo.bar()
