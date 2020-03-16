// errorCount 2

export default 1;

(async (): Promise<void> => {
  await 'value'

  const createValue = (): string => 'value'
  await createValue()
})()
