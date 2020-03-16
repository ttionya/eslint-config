export default 1;

(async (): Promise<void> => {
  await Promise.resolve('value')

  const createValue = async (): Promise<string> => 'value'
  await createValue()
})()
