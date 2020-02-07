// errorCount 1

const foo = {
  set bar(value) {
    this.barValue = 'bar ' + value
  },
  baz: 1,
  get bar() {
    return this.barValue
  },
}

console.log(foo)
