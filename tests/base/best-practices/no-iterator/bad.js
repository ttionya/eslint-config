// errorCount 1

const Foo = {}

Foo.prototype.__iterator__ = function () {
  // do something
}
