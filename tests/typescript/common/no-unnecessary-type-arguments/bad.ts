// errorCount 4
/* eslint-disable @typescript-eslint/no-unused-vars */

export default 1

class Foo<T = number> {
  public foo(): void {
    console.log(1)
  }
}

function func(foo: Foo<number>): void {
  // do something
}
const foo = new Foo<number>()
class FooBar extends Foo<number> {
  public foo(): void {
    console.log(1)
  }
}

interface IInterface<T = number> {
  name?: string
}
class Impl implements IInterface<number> {
  name: ''

  public foo(): void {
    console.log(1)
  }
}

