/* eslint-disable @typescript-eslint/no-unused-vars */

export default 1

const foo = 123
const foo1 = `arg = ${foo}`
const foo2 = `arg = ${foo || 'zero'}`

const bar = true
const bar1 = `arg = ${bar}`
const bar2 = `arg = ${bar || 'not truthy'}`

const baz = undefined ? 'ok' : null
const baz1 = `arg = ${baz}`
