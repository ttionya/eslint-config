interface IFoo {
  name: string
}

interface IBar {
  age: number
}

interface IBaz extends IFoo, IBar {}

interface IAux extends IFoo {}
