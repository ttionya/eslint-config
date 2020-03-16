/* eslint-disable @typescript-eslint/consistent-type-definitions */

export default 1

interface IFoo {
  name: string
  greet(): string
}

interface IFoo { name: string }

type Bar = {
  name: string
  greet(): string
}

type BarBaz = { name: string }

type FooBar = { name: string; greet(): string }
