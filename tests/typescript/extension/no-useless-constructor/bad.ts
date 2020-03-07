// errorCount 2
/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-extraneous-class */

export default 1

class Foo {
  constructor(prop?: string) {
    // do nothing
  }
}

class Bar extends Foo {
  constructor(...args) {
    super(...args)
  }
}
