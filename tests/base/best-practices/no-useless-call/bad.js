// errorCount 4

const foo = () => {}

foo.call(null, 1, 2, 3)
foo.apply(null, [1, 2, 3])

foo.bar.call(foo, 1, 2, 3)
foo.bar.apply(foo, [1, 2, 3])
