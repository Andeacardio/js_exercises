// function which return most longest word in sentence

const logestWord = (sentence) => {
  let words = sentence.split(" ");
  let longets = " ";

  for (let word of words) {
    if (word.length > longets.length) {
      longets = word;
    }
  }

  return longets;
};

console.log(logestWord("Hello I am a developer "));

//function check array and return "arehmatic" "geometric" or "no patern"

const mathSecvenses = (arr) => {
  let arehmatic = new Set();
  let geometric = new Set();

  for (let i = 1; i < arr.length; i++) {
    let number1 = arr[i] - arr[i - 1];
    arehmatic.add(number1);
    let number2 = arr[i] / arr[i - 1];
    geometric.add(number2);
  }

  if (arehmatic.size === 1) {
    return "Arehmatic";
  }

  if (geometric.size === 1) {
    return "Geometric";
  }
  return -1;
};

console.log(mathSecvenses([2, 4, 6]));
console.log(mathSecvenses([3, 9, 27]));
console.log(mathSecvenses([2, 5, 62]));

//---------------FizzBuzz----------------------
const output = [];
let count = 1;

function FizzBuzz() {
  for (let i = 1; i < 101; i++) {
    if (i % 3 === 0) {
      if (i % 3 === 0 && i % 5 === 0) {
        output.push("FizzBuzz");
      } else {
        output.push("Fizz");
      }
    } else if (i % 5 === 0) {
      if (i % 3 === 0 && i % 5 === 0) {
        output.push("FizzBuzz");
      } else {
        output.push("Buzz");
      }
    } else {
      output.push(count);
    }
    count++;
  }
  console.log(output);
}
FizzBuzz();

//------------------fibanachi(число+поперднє=наступне)-----------------------

function fibanachi1(n) {
  let start = 1;
  const output = [0];
  n--;

  for (let i = 0; i < n; i++) {
    output.push(start);
    start = start + output[output.length - 2];
  }
  console.log(output);
}
fibanachi1(20);
//------------------fibanachi(числов квадраті=наступне)-----------------------

function fibanachi2(n) {
  let start = 1;
  const output = [0];
  n--;

  for (let i = 0; i < n; i++) {
    output.push(start);
    start = start + output[output.length - 1];
  }
  console.log(output);
}
fibanachi2(20);

//---------------------bmi calculator--------------------------
var height = prompt("Write your height");
var weight = prompt("Write your weight");

function bmi(weig, heig) {
  let bmi = (weig / (heig * heig)) * 1000;
  if (bmi < 18.5) {
    return "Yor bmi result is: " + bmi + ". Your have small weight.";
  } else if (bmi > 18.5 && bmi < 24.5) {
    return "Yor bmi result is: " + bmi + ". Your have normal weight.";
  } else {
    return "Yor bmi result is: " + bmi + ". Your have big weight.";
  }
}
alert(bmi(height, weight));

//--------------------------замикання 1-----------------------

function person() {
  const a = "Ivan";

  return function myFn() {
    console.log(a);
  };
}
const name1 = person();
name1();

//---------------------closuring 2-----------------------------

function counting() {
  let count = 0;
  return function myFn() {
    return count++;
  };
}
const coun = counting();
console.log(coun());
console.log(coun());
console.log(coun());
console.log(coun());

// ----------------Angela-----------
const dogAge = prompt("Online Calculator Dogs-Age . What old is your dog?");
alert("your dog is " + ((dogAge - 2) * 4 + 21) + " years old");

const age = prompt("What is your age?");
function lifeInWeeks(age) {
  let life =
    "You have " +
    (365 * 90 - 365 * age) +
    " days, " +
    (52 * 90 - 52 * age) +
    " weeks, " +
    (12 * 90 - 12 * age) +
    " months left.";
  return life;
}
alert(lifeInWeeks(age));

//Create your function below this line.
//The first parameter should be the weight and the second should be the height.
function bmiCalculator(height, weight) {
  var bm = weight / (height * height);
  console.log(bm);
}

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:
var bmi = bmiCalculator(65, 1.8); 
bmi should equal 20 when it's rounded to the nearest whole number. */

//--------------------------------fizzbuzz----------------------------------------------
var output2 = [];
var count2 = 1;

function FizzBuzz() {
  for (var i = 1; i < 101; i++) {
    if (count2 % 3 === 0) {
      if (count2 % 3 === 0 && count2 % 5 === 0) {
        output2.push("FizzBuzz");
      } else {
        output2.push("Fizz");
      }
    } else if (count2 % 5 === 0) {
      if (count2 % 3 === 0 && count2 % 5 === 0) {
        output2.push("FizzBuzz");
      } else {
        output2.push("Buzz");
      }
    } else {
      output2.push(count);
    }
    count2++;
    console.log(output2);
  }
}
function My() {
  console.log(output);
}

//-------------------Another task----------------
var sum = 100;
while (sum >= 2) {
  sum--;

  console.log(
    sum +
      " bottles of beer on the wall, " +
      sum +
      " bottels of beer. \n Take one down and pass it around, " +
      (sum - 1) +
      " bottlesof beer on the wall."
  );
}
console.log(
  "No more bottles of beer on the wall, no more bottels of beer. \n Take one down and pass it around, 99 bottlesof beer on the wall."
);

//---------------------------------leap year------------------------------------
var year = prompt("What year is leap?");
alert(isLeap());
function isLeap(year) {
  var firstLeap = year % 4;
  var secondLeap = year % 100;
  var thirdLeap = year % 400;
  if (
    firstLeap == 0 &&
    secondLeap == Math.floor(secondLeap) &&
    thirdLeap == Math.floor(thirdLeap)
  ) {
    alert("Leap year.");
  } else {
    alert("Not leap year.");
  }
}
//isLeap(1948);
// && thirdLeap != Math.floor(thirdLeap)
//---------------------------------fibanachi------------------------------------
function fibanachi(n) {
  var output = [0];
  var start = 1;
  n--;
  for (let i = 0; i < n; i++) {
    output.push(start);
    start = start + output[output.length - 2];
  }
  console.log(output);
}
function fibanachiOld(n) {
  var output = [0];
  var start = 1;
  n--;
  for (let i = 0; i < n; i++) {
    output.push(start);
    start = start + output[output.length - 1];
  }
  console.log(output);
}
//-----------------------------random name--------------------------------------
var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function name(names) {
  var n = Math.random();
  var a = names.length;
  n *= a;
  n = Math.floor(n);
  var b = names[n];
  console.log(b + " is paying for lunch today!");
}
//----------------------------bmi calculator------------------------------------
function bmiCalculator(weight, height) {
  var bmi = weight / (height * height);
  if (bmi < 18.5) {
    return "Your BMI is " + bmi + ", so you are underweight.";
  } else if (bmi > 18.5 && bmi < 24.9) {
    return "Your BMI is " + bmi + ", so you are underweight.";
  } else {
    return "Your BMI is " + bmi + ", so you are overweight.";
  }
}
bmiCalculator(80, 2);
//-------------------------------procent of love---------------------------------
var firstname = prompt("Write the girl`s name");
var secondname = prompt("Write the boy`s name");
var n = Math.random();
n *= 100;
n = Math.floor(n) + 1;
alert(firstname + " " + secondname + " procent of love is " + n + "%");

//-------------------fizz buzz-------------------------------
var output3 = [];
var count3 = 1;

function FizzBuzz() {
  for (var i = 1; i < 101; i++) {
    if (count3 % 3 === 0) {
      if (count3 % 3 === 0 && count3 % 5 === 0) {
        output3.push("FizzBuzz");
      } else {
        output3.push("Fizz");
      }
    } else if (count3 % 5 === 0) {
      if (count3 % 3 === 0 && count3 % 5 === 0) {
        output3.push("FizzBuzz");
      } else {
        output3.push("Buzz");
      }
    } else {
      output3.push(count);
    }
    count3++;
    console.log(output3);
  }
}
function My2() {
  console.log(output3);
}
//----------------------random name------------------------------
var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
function name(names) {
  var n = Math.random();
  var a = names.length;
  n *= a;
  n = Math.floor(n);
  var b = names[n];
  return b + " is paying for lunch today!";
}

function who(names) {
  var numberOfPeople = names.length;
  var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
  var randomPerson = names[randomPersonPosition];
  return randomPerson + " is going to buy lunch today!";
}
//----------------------check gests-------------------------------
var gest = ["Angela", "Petro", "Ivan", "Mykola"];
var checkGest = prompt("Hello! Check if you are in the gest list.");
if (gest.includes(checkGest)) {
  alert("Welcome!");
} else {
  alert("Sorry , you are not a gest!");
}
//----------------------fibonachi---------------------------
function fibonachi(n) {
  var arr = [0];
  var start = 1;
  for (var i = 0; i < n; i++) {
    arr.push(start);
    start = start + arr[arr.length - 2];
  }

  console.log(arr);
}
function fibonachiNew(n) {
  var arr = [0];
  var start = 1;
  for (var i = 0; i < n; i++) {
    arr.push(start);
    start = start + arr[arr.length - 1];
  }

  console.log(arr);
}
function fibonachiOld(n) {
  var arr = [0];
  var start = 1;
  n--;
  for (var i = 0; i < n; i++) {
    arr.push(start);
    start = start + arr[arr.length - 2];
  }
  console.log(arr);
}

//--------------------------logic for dice game
var n = Math.floor(Math.random() * 6) + 1;
var a = "/images/" + n + ".png";
console.log(a);

var b = Math.floor(Math.random() * 6) + 1;
var c = "/images/" + b + ".png";
console.log(c);
document.querySelector("#dice1 img").setAttribute("src", a);
document.querySelector("#dice2 img").setAttribute("src", c);

if (b === n) {
  document.querySelector("#dice1 p").innerHTML = "<p>Players 1 Draw</p>";
  document.querySelector("#dice2 p").innerHTML = "<p>Players 2 Draw</p>";
} else if (b > n) {
  document.querySelector("#dice2 p").innerHTML = "<p>Players 2 WON !!!</p>";
} else if (n > b) {
  document.querySelector("#dice1 p").innerHTML = "<p>Players 1 WON !!!</p>";
}

// ------------------------------logic for sintezator app--------------------

var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:
      console.log(buttonInnerHtml);
  }
}
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 150);
}
