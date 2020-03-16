// errorCount 2
/* eslint-disable @typescript-eslint/no-unused-vars */

export default 1

const bar: string | number = Math.random() ? 1 : '1'
const foo = <string>bar

const baz = {
  bar: 1,
} as object
