/* eslint-disable no-new */

class Foo {
  constructor(bar) {
    if (!bar) {
      return
    }
    this.bar = bar
  }
}

new Foo(1)
