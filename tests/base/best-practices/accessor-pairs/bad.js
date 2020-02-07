// errorCount 1

const foo = {
  set bar(value) {
    this.barValue = 'bar ' + value
  },
}

console.log(foo)
