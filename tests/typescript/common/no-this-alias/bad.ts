// errorCount 1
/* eslint-disable @typescript-eslint/no-unused-vars */

class Class {
  public foo(this: any): void {
    const that = this

    setTimeout(function () {
      that.doWork()
    })
  }
}
