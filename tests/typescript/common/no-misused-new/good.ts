/* eslint-disable @typescript-eslint/no-extraneous-class */

class C {
  constructor() {
    console.log(1)
  }
}

interface IInterface {
  foo: number
  new (): C
}
