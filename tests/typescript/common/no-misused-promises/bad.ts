// errorCount 2

(async (): Promise<any> => {
  const promise = Promise.resolve('value')

  if (promise) {
    // do something
  }

  [1, 2, 3].forEach(async (value) => {
    await promise(value)
  })
})()
