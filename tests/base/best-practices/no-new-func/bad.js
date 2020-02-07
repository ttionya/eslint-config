// errorCount 1

const foo = new Function('a', 'b', 'return a + b')

foo(1, 2)
