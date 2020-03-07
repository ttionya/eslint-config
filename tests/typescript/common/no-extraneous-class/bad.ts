// errorCount 3
/* eslint-disable @typescript-eslint/no-unused-vars */

class EmptyClass {}

class ConstructorOnly {
  constructor() {
    console.log(1)
  }
}

class StaticOnly {
  static version = 42

  public static hello(): void {
    console.log('Hello, world!')
  }
}
