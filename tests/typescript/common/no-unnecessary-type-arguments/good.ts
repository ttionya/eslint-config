/* eslint-disable @typescript-eslint/no-unused-vars */

export default 1

class Foo<T = number> {
  public foo(): void {
    console.log(1)
  }
}
const foo = new Foo<string>()
class FooBar extends Foo<string> {}

interface IInterface<T = number> {
  name?: string
}
class Impl implements IInterface<string> {
  name: ''

  public foo(): void {
    console.log(1)
  }
}
