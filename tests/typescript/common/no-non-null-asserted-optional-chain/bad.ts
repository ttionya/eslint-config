// errorCount 1

let foo: { bar: { baz: string } } | undefined

console.log(foo?.bar!.baz)
