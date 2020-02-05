// errorCount 2

import foo from 'foo'
import * as bar from 'bar'

foo = 1
bar.baz = 1

console.log(foo, bar)
