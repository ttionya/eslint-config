export default 1;

(async (): Promise<any> => {
  const promise = Promise.resolve('value')

  if (await promise) {
    // do something
  }

  while (await promise) {
    // do something
  }
})()
