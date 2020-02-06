const callFoo = () => console.log(foo)
const foo = 1
console.log(foo, callFoo)

bar()
function bar() {}

const callBaz = () => new Baz()
class Baz {}
console.log(Baz, callBaz)
