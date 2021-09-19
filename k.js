class A {
  method() {
    return 3;
  }

  constructor() {
    this.p = 2;
  }
}

class B extends A {
  get m() {
    return super.method();
  }
}

let obj = new B();
console.log(obj.m);

let a = {
  a: {
    b: {
      c: 1
    }
  }
};

let b = {
  a: {
    b: {
      d: 2
    }
  }
};

console.log(Object.assign(a, b));
