// errorCount 4
/* eslint-disable @typescript-eslint/no-unused-vars */

export default 1

class Animal {
  legs: number

  hasFleas: boolean

  animalName: string

  public constructor(animalName: string, age: number) {
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
}
