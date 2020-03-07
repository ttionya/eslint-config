// errorCount 1
/* eslint-disable @typescript-eslint/semi */

export default 1

const foo = 1; ;

((): void => {
  console.log(foo)
})()
