// errorCount 3
/* eslint-disable no-unused-vars */

import { foo as foo } from 'foo'

const bar = 1
let { baz: baz } = foo

export { bar as bar }
