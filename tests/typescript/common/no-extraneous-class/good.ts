/* eslint-disable @typescript-eslint/no-unused-vars */

const decorator = <T>(classes: T): T => classes

class EmptyClass extends Event {}

@decorator
class ParameterProperties {
  name: string

  constructor(name: string) {
    console.log(1)
  }
}
