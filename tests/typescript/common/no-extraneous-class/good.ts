/* eslint-disable @typescript-eslint/no-unused-vars */

export default 1

const decorator = <T>(classes: T): T => classes

class EmptyClass extends Event {}

@decorator
class ParameterProperties {
  name: string

  constructor(name: string) {
    this.name = name
  }
}
