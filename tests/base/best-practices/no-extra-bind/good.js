const bar = 1;

(function () {
  this.foo()
}.bind(bar))
