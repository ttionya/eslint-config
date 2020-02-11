// errorCount 2
/* eslint-disable no-unused-vars */

class Foo {
  constructor() {
    // do nothing
  }
}

class Bar extends Foo {
  constructor(...args) {
    super(...args)
  }
}
