const foo = () => {}
const bar = () => {}

foo.call(bar, 1, 2, 3)
foo.apply(bar, [1, 2, 3])

foo.bar.call(bar, 1, 2, 3)
foo.bar.apply(bar, [1, 2, 3])
