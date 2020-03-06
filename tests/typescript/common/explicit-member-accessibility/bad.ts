// errorCount 4
/* eslint-disable @typescript-eslint/no-unused-vars */

export default 1

class Animal {
  public constructor(public animalName: string, age: number) {
    this.hasFleas = false
  }

  get name(): string {
    return this.animalName
  }

  set name(value: string) {
    this.animalName = value
  }

  drink(): void {
    // do something
  }

  legs: number

  hasFleas: boolean
}
