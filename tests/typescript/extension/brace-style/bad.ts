// errorCount 3

export default 1

const foo = 0

if (foo) { console.log(foo) }
else {
  console.error(foo)
}

if (foo) { console.log(foo) }
else { console.error(foo) }

if (foo)
{
  console.log(foo)
}

