import foo from 'fs'

const bar = 10;

(function (a1: string, a2: string, a3: string, a4: string): string {
  return a4
})('', '', '', '')

const { a1, ...rest } = { a1: 1, a2: 2, a3: 3 }

console.log(foo, bar, rest)

try {
  // do something
} catch (err) {
  console.error('errors')
}
