// errorCount 12
/* eslint-disable @typescript-eslint/no-unused-vars */

class Foo {
  private getBar3(): string {
    return this.bar3
  }

  protected getBar2(): void { /* do something */ }

  public getBar1(): void { /* do something */ }

  constructor() {
    console.log(Foo.getFoo3())
    console.log(this.getBar3())
  }

  private bar3 = 'bar3'

  protected bar2 = 'bar2'

  public bar1 = 'bar1'

  private static getFoo3(): string {
    return Foo.foo3
  }

  protected static getFoo2(): void { /* do something */ }

  public static getFoo1(): void { /* do something */ }

  private static foo3 = 'foo3'

  protected static foo2 = 'foo2'

  public static foo1 = 'foo1'
}
