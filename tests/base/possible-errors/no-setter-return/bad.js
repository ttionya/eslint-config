// errorCount 1
/* eslint-disable no-unused-vars */

const foo = {
  set bar(value) {
    this.barValue = 'bar ' + value
    return this.barValue
  },
  get bar() {
    return this.barValue
  },
}
