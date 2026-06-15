let result = document.querySelector("#result");

let numbersClass = document.querySelector(".numbers");
let operatorClass = document.querySelector(".operators");

let equal = document.querySelector("#equal");
let clear = document.querySelector("#clear");

function TargetHandler(name) {
  name.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      result.value += event.target.textContent;
    }
  });
}

TargetHandler(numbersClass);
TargetHandler(operatorClass);

clear.addEventListener("click", () => {
  result.value = "";
});

equal.addEventListener("click", () => {
  let numbers;
  if (result.value.includes("+")) {
    numbers = result.value.split("+");
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += Number(numbers[i]);
      result.value = String(sum);
    }
  } else if (result.value.includes("-")) {
    numbers = result.value.split("-");
    let subtract = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      subtract -= Number(numbers[i]);
      result.value = String(subtract);
    }
  } else if (result.value.includes("*")) {
    numbers = result.value.split("*");
    let multiply = 1;
    for (let i = 0; i < numbers.length; i++) {
      multiply *= Number(numbers[i]);
      result.value = String(multiply);
    }
  } else if (result.value.includes("/")) {
    numbers = result.value.split("/");
    let divide = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      divide /= Number(numbers[i]);
      result.value = String(divide);
    }
  }
});
