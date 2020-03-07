// errorCount 1
/* eslint-disable @typescript-eslint/no-unused-vars */

function foo(x: number): void
function foo(x: string): void
function foo(x: any): any {
  return x
}
