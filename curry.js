const _add = function(a, b, c, d, e, f) {
  return [].slice.call(arguments).reduce((acc, cur) => acc + cur);
};

const curry = function(fn, args) {
  var args = args || [];
  const that = this;
  return function() {
    const _args = [].slice.call(arguments);
    const newArgs = _args.concat(args);
    console.log(newArgs);
    if (newArgs.length < fn.length) {
      return curry.call(that, fn, newArgs);
    }
    return fn.apply(this, newArgs);
  };
};

const add = curry(_add);
console.log(add(1)(2)(3)(4, 5, 6));
