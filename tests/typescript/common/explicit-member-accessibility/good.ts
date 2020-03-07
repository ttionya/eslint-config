/* eslint-disable @typescript-eslint/no-unused-vars */

export default 1

class Animal {
  legs: number

  private hasFleas: boolean

  private animalName: string

  constructor(animalName: string) {
    this.hasFleas = false
  }

  public get name(): string {
    return this.animalName
  }

  public set name(value: string) {
    this.animalName = value
  }

  public drink(): void {
    // do something
  }
}
