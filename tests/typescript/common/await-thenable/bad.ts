// errorCount 2

(async (): Promise<void> => {
  await 'value'

  const createValue = (): string => 'value'
  await createValue()
})()
