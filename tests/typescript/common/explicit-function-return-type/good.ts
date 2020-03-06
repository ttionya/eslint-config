/* eslint-disable @typescript-eslint/no-unused-vars */

export default 1

function test(): void {
  // do something
}

interface IObjectType {
  foo(): number
}
const objectProp: IObjectType = {
  foo: () => 1,
}

const arrowFn = () => (): void => { /* do something */ }
