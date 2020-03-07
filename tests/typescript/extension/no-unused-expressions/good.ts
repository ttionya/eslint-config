export default 1

const foo = '0'
const bar = (param: string): void => { console.log(param) }
const baz = (): void => { /* do something */ }

foo && baz()
foo || baz()
foo ? bar('') : baz()
