/* eslint-disable @typescript-eslint/no-unused-vars */

export default 1

const callFoo = (): void => console.log(foo)
const foo = 1

bar()
function bar(): void { /* do something */ }

const callBaz = (): Baz => new Baz()
class Baz {
  public foo(): void {
    // do something
  }
}
