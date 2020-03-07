// errorCount 1
/* eslint-disable @typescript-eslint/no-unused-vars */

export default 1

class Class {
  public foo(this: any): void {
    const that = this

    setTimeout(function () {
      that.doWork()
    })
  }
}
