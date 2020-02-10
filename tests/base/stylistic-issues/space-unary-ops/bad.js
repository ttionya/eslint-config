// errorCount 6
/* eslint-disable no-unused-vars */

let foo = 1
const bar = async () => {
  await(foo)
}
const baz = typeof!foo

foo = foo ++
foo = ++ foo
foo = ! foo
foo = + foo
