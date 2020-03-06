// errorCount 7
/* eslint-disable @typescript-eslint/consistent-type-definitions */

interface IFoo {
  name: string,
  greet(): string,
}

interface IBar {
  name: string;
  greet(): string;
}

interface IBaz {
  name: string;
  greet(): string
}

type FooBar = { name: string, greet(): string }

type FooBarBaz = { name: string; greet(): string; }
