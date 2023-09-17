//-----------------Closers , time optimization-------------

function find(index) {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  console.log(a[index]);
}
console.time("6");
find(6);
console.timeEnd("6");
console.time("12");
find(12);
console.timeEnd("12");

//----------------optimaze version-----------

function find2(index) {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }

  return function (index) {
    console.log(a[index]);
  };
}
const closure = find2();
console.time("6");
closure(6);
console.timeEnd("6");
console.time("12");
closure(12);
console.timeEnd("12");

//-----------------------Module Pattern------
var Module = (function () {
  function privateMethod() {
    console.log("privatFunction");
  }
  return {
    publichod: function () {
      privateMethod();
    },
  };
})();
Module.publichod();

//------------------implemet chaching/memoize function---

const clumsysquare = (num1, num2) => {
  for (let i = 1; i <= 100000000; i++) {
    return num1 * num2;
  }
};
console.time("First call");
console.log(clumsysquare(9467, 7649));
console.timeEnd("First call");

console.time("Second call");
console.log(clumsysquare(9467, 7649));
console.timeEnd("Second call");

//optimaise it

function myMemoize(fn, context) {
  const res = {};
  return function (...args) {
    var argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}
const clumsyProduct = (num1, num2) => {
  for (let i = 1; i <= 100000000; i++) {
    return num1 * num2;
  }
};
const memoizedClumzyProduct = myMemoize(clumsyProduct);

console.time("First call");
console.log(memoizedClumzyProduct(9467, 7649));
console.timeEnd("First call");

console.time("Second call");
console.log(memoizedClumzyProduct(9467, 7649));
console.timeEnd("Second call");

//normal function f(a,b) into carrying function f(a)(b)

function f(a) {
  return function (b) {
    return `${a} ${b}`;
  };
}
console.log(f(5)(6));

//one more example sum(2)(6)(1)
function sum1(a, b, c) {
  return a + b + c;
}
console.log(sum1(2, 6, 1));

function sum2(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(sum2(2)(6)(1));

// create function which can do this:
/* 
  evalue("sum")(4)(2)     =>6
  evalue("myltiply")(4)(2)     =>8
  evalue("divide")(4)(2)     =>2
  evalue("subtract")(4)(2)     =>2
  */
function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation === "sum") return a + b;
      else if (operation === "multiply") return a * b;
      else if (operation === "devide") return a / b;
      else if (operation === "substract") return a - b;
      else return "Invalid Operation";
    };
  };
}
const summ = evaluate("sum");
console.log(summ(5)(5));

// infinite curying

function add1(a) {
  return function (b) {
    if (b) return add1(a + b);

    return a;
  };
}
console.log(add1(5)(2)(4)(8)());

//currying vs partial application

//partial application
function sum3(a) {
  return function (b, c) {
    return a + b + c;
  };
}
const x = sum3(10);
console.log(x(5, 6));
console.log(x(3, 2));
//or
console.log(sum3(20)(1, 4));

//carrying
function sum4(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

//Manipulation DOM with curring

function updateElementText(id) {
  return function (content) {
    document.querySelector("#" + id).textContent = content;
  };
}
const updateHeader = updateElementText("heading");
// updateHeader("Very good counter!");

//create function which can change normalfunction sum(a,b,c,d) to curring function sum(a)(b)(c)(d)

function curry(func) {
  return function curriedFunc(...args) {
    //console.log(args.length,func.length)
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}
const sum5 = (a, b, c, d) => a + b + c + d;
const totalSum = curry(sum5);

console.log(totalSum(2)(2)(2)(2));
