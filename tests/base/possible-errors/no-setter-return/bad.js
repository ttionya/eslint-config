// errorCount 1

const foo = {
  set bar(value) {
    this.barValue = 'bar ' + value
    return this.barValue
  },
}

console.log(foo)