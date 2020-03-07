/* eslint-disable @typescript-eslint/no-unused-vars */

export default 1

class Foo {
  public static foo1 = 'foo1'

  protected static foo2 = 'foo2'

  private static foo3 = 'foo3'

  public static getFoo1(): void { /* do something */ }

  protected static getFoo2(): void { /* do something */ }

  private static getFoo3(): string {
    return Foo.foo3
  }

  public bar1 = 'bar1'

  protected bar2 = 'bar2'

  private bar3 = 'bar3'

  constructor() {
    console.log(Foo.getFoo3())
    console.log(this.getBar3())
  }

  public getBar1(): void { /* do something */ }

  protected getBar2(): void { /* do something */ }

  private getBar3(): string {
    return this.bar3
  }
}
