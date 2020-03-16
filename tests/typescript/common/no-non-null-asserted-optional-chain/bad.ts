// errorCount 1

export default 1

let foo: { bar: { baz: string } } | undefined

console.log(foo?.bar!.baz)
