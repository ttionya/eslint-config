// errorCount 2
/* eslint-disable no-useless-return */

const array = [1, 2, 3]

array.map((num) => {
  console.log(num * num)
})

array.every((num) => {
  console.log(num)

  return
})
