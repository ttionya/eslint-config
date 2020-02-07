const bar = () => {}

async function foo() {
  const b = await bar()

  return b
}

foo().then()
