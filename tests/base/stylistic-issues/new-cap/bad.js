// errorCount 2
/* eslint-disable no-new */

const foo = () => {}
const bar = {
  bar() {},
}

new foo()
new bar.bar()
