/* eslint-disable strict */

'use strict'

const foo = 0
const bar = () => {}
const baz = () => {}
const qux = {}

foo && bar()
foo || bar()
foo ? bar() : baz()
foo`bar`
qux?.foo()
