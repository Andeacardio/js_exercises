const text = document.querySelector(".display_text");
const inputValue = document.querySelector(".input-value");
const add = document.querySelector(".add");
const remove = document.querySelector(".remove");
const multiply = document.querySelector(".multiply");
const devide = document.querySelector(".devide");
const reset = document.querySelector(".reset");
const balance = document.querySelector(".balance");

//How wouid you use a cloasure to create a privat counter

function counter() {
  let counter = 0;

  function add(increment) {
    counter += +increment;
  }
  function remove(increment) {
    counter -= +increment;
  }
  function multiply(increment) {
    counter = counter * +increment;
  }
  function devide(increment) {
    counter = counter / +increment;
  }
  function reset() {
    counter = 0;
    return (counterValue = "Counter = " + counter);
  }
  function value() {
    return (counterValue = "Counter = " + counter);
  }
  return {
    add,
    remove,
    multiply,
    devide,
    reset,
    value,
  };
}
const c = counter();

add.addEventListener("click", (event) => {
  if (inputValue.value) {
    c.add(inputValue.value);
    text.innerText = c.value();
    inputValue.value = "";
  } else {
    alertWindow();
  }
});
remove.addEventListener("click", (event) => {
  if (inputValue.value) {
    c.remove(inputValue.value);
    text.innerText = c.value();
    inputValue.value = "";
  } else {
    alertWindow();
  }
});
multiply.addEventListener("click", (event) => {
  if (inputValue.value) {
    c.multiply(inputValue.value);
    text.innerText = c.value();
    inputValue.value = "";
  } else {
    alertWindow();
  }
});
devide.addEventListener("click", (event) => {
  if (inputValue.value) {
    c.devide(inputValue.value);
    text.innerText = c.value();
    inputValue.value = "";
  } else {
    alertWindow();
  }
});
reset.addEventListener("click", (event) => {
  text.innerText = c.reset();
  inputValue.value = "";
});
function alertWindow() {
  alert("Please, write a number!");
  inputValue.value = "";
}
