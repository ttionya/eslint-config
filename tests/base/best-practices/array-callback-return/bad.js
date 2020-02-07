// errorCount 2
/* eslint-disable no-useless-return */

const array = [1, 2, 3]

const foo = array.map((num) => {
  console.log(num * num)
})

const bar = array.every((num) => {
  console.log(num)

  return
})

console.log(foo, bar)
