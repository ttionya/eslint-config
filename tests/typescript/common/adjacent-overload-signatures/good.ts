/* eslint-disable no-unused-vars, @typescript-eslint/consistent-type-definitions */

declare namespace INSFoo {
  export function foo(s: string): void
  export function foo(n: number): void
  export function foo(sn: string | number): void
  export function bar(): void
}

type TypeFoo = {
  foo(s: string): void
  foo(n: number): void
  foo(sn: string | number): void
  bar(): void
}

interface IFoo {
  foo(s: string): string
  foo(n: number): number
  foo(sn: string | number): void
  bar(): void
}
