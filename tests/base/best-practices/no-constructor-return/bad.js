// errorCount 1
/* eslint-disable no-new */

class Foo {
  constructor(bar) {
    if (!bar) {
      return false
    }
    this.bar = bar
  }
}

new Foo(1)
