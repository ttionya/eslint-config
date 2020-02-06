// errorCount 6

const obj = {}
const bar = { [ obj ]: 1 }

console.log(obj[ obj])
console.log(obj['foo' ])
console.log(obj[obj[ bar ]])
