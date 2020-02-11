/* eslint-disable no-unused-vars */

class Foo {
  foo = this.a

  #pri = 1

  constructor() {
    this.a = 0

    console.log(this.#pri)
  }
}
