/* eslint-disable no-new */

const decorator = () => {}

@decorator()
class Foo {

}
const foo = {
  Bar() {},
}

new Foo()
new foo.Bar()
foo.Bar()
