/***
 * 写一个加法函数sum，支持sum(1)(2)(3,4)(5,6,7....)  
 * console.log(sum(1,2,3)(4).run()) => 输出 10
 * console.log(sum(1,2,3)(4)()) => 输出 10
 */
const _add = function() {
  return [].slice.call(arguments).reduce((acc, cur) => acc + cur,0);
};


const curry = function(fn, params) {
  let newArgs = params || [];
  const that = this;
  let ret = function() {
    const _args = [].slice.call(arguments);
    console.log('args====>',_args,newArgs)
    newArgs = _args.concat(newArgs);
    if (arguments.length) {
      return curry.call(that, fn, newArgs);
    }else{
      return fn.apply(this, newArgs);
    }
  }
  ret.run =function(){
    return fn.apply(this,newArgs)
  }
  return ret
};

const sum = curry(_add);
// console.log(sum(1,2,3)(4, 5, 6)());
console.log(sum(1,2,3)(4)(5).run());

console.log([3, 15, 8, 29, 102, 22].sort((a,b)=>a-b))
