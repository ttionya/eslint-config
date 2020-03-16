/* eslint-disable @typescript-eslint/no-unused-vars */

export default 1

const bar: string | number = Math.random() ? 1 : '1'
const foo = bar as string

const baz = {
  bar: 1,
} as any
