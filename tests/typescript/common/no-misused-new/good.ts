/* eslint-disable @typescript-eslint/no-extraneous-class */

export default 1

class C {
  constructor() {
    console.log(1)
  }
}

interface IInterface {
  foo: number
  new (): C
}
