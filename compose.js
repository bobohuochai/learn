/**
 *
 * 上一个函数的结果是下一个函数的输入
 * 重右往左执行
 */
const compose = (...args) => {
  const length = args.length;
  let count = length - 1;
  return function fn1() {
    let result = args[count].apply(this, arguments);
    if (count <= 0) {
      count = length - 1;
      return result;
    } else {
      count--;
      return fn1.call(this, result);
    }
  };
};

const toLowercase = str => str.toLowerCase();

const toUpper = str => str.toUpperCase();

const greeting = (firstName, lastName) => `hello,${lastName},${firstName}`;

const composeFn = compose(
  toLowercase,
  toUpper,
  greeting
);

console.log(composeFn("Jun", "Xu"));
