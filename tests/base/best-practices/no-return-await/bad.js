// errorCount 1

const bar = () => {}

async function foo() {
  return await bar()
}

foo().then()
