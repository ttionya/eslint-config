/* eslint-disable @typescript-eslint/no-unused-vars */

class Class {
  public foo(this: any): void {
    const { bar } = this
    const self = this

    setTimeout(() => {
      this.doWork()
    })
  }
}
