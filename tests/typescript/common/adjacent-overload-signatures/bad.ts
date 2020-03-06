// errorCount 3
/* eslint-disable no-unused-vars, @typescript-eslint/consistent-type-definitions */

declare namespace NSFoo {
  export function foo(s: string): void
  export function foo(n: number): void
  export function bar(): void
  export function foo(sn: string | number): void
}

type TypeFoo = {
  foo(s: string): void
  foo(n: number): void
  bar(): void
  foo(sn: string | number): void
}

interface IFoo {
  foo(s: string): void
  foo(n: number): void
  bar(): void
  foo(sn: string | number): void
}
