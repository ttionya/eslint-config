// errorCount 1

const foo = 0

switch (typeof foo) {
  case 'string':
    // do something
    break
  case 'number':
  case 'object':
    // do something
    break
}