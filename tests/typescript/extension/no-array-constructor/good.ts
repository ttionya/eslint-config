/* eslint-disable @typescript-eslint/no-unused-vars */

export default 1

interface IFoo {
  [index: number]: string
}

Array<number>(0, 1, 2)
const foo = new Array<IFoo>('x', 'y', 'z')

Array(500)
const bar = new Array(foo.length)
