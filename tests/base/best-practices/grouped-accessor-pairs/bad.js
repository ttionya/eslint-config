// errorCount 1
/* eslint-disable no-unused-vars */

const foo = {
  set bar(value) {
    this.barValue = 'bar ' + value
  },
  baz: 1,
  get bar() {
    return this.barValue
  },
}
