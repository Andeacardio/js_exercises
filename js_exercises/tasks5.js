//---------closure
function counting() {
  let count = 0;
  return function myFn() {
    return count++;
  };
}
const coun = counting();
// console.log(coun());
// console.log(coun());

//----this----
const test = {
  prop: 42,
  func: function () {
    return this.prop;
  },
};
// console.log(test.func());

//call,apply
function Car(type, fuelType) {
  this.type = type;
  this.fuelType = fuelType;
}
function setBrand(brand) {
  Car.call(this, "convertible", "petrol");
  this.brand = brand;
  //   console.log(`Car details = `, this);
}
function definePrice(price) {
  Car.apply(this, ["convertible", "diesel"]);
  this.price = price;
  //   console.log(`Car details = `, this);
}
const newBrand = new setBrand("Brand1");
const newCarPrice = new definePrice(100000);

//bind
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};
let fullName = person.fullName.bind(member);
// console.log(fullName());

//carring function
const add = (x) => (y) => x + y;
const add20ToNum = add(20);
console.log(add20ToNum(100));

function add2(x) {
  return function (y) {
    return x + y;
  };
}
const add20ToNum1 = add2(20);
console.log(add20ToNum1(100));
console.log(add2(20)(300));

function add3(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(add3(5)(5)(5));

//promise
fetch("https://www.w3schools.com/js/")
  .then((response) => response.json())
  .then((user) => handleUserProfile(user))
  .catch((error) => console.log(error));

//memoizing function
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
