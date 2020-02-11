/* eslint-disable no-unused-vars */

class Foo {
  constructor() {
    console.log(1)
  }
}

class Bar extends Foo {
  constructor(...args) {
    super(...args)

    console.log(1)
  }
}
