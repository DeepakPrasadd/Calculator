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

function sumHandler(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += Number(numbers[i]);
    result.value = String(sum);
  }
}

function subtractHandler(numbers) {
  let subtract = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    subtract -= Number(numbers[i]);
    result.value = String(subtract);
  }
}

function multiplyHandler(numbers) {
  let multiply = 1;
  for (let i = 0; i < numbers.length; i++) {
    multiply *= Number(numbers[i]);
    result.value = String(multiply);
  }
}
function divideHandler(numbers) {
  let divide = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    divide /= Number(numbers[i]);
    result.value = String(divide);
  }
}

TargetHandler(numbersClass);
TargetHandler(operatorClass);

clear.addEventListener("click", () => {
  result.value = "";
});

equal.addEventListener("click", () => {
  let numbers;

  for (let i = 0; i < result.value.length; i++) {
    if (result.value[i] == "+") {
      numbers = result.value.split("+");
      for (let i = 0; i < numbers.length; i++) {
        console.log(numbers, numbers[i]);
        if (numbers[i].includes("-")) {
          let splitedObj = numbers[i].split("-");
          numbers[i] = splitedObj[0];
          splitedObj.shift();
          sumHandler(numbers);
          subtractHandler(Object.assign([result.value, ...splitedObj]));
        } else if (numbers[i].includes("*")) {
          let splitedObj = numbers[i].split("*");
          numbers[i] = splitedObj[0];
          splitedObj.shift();
          sumHandler(numbers);
          multiplyHandler(Object.assign([result.value, ...splitedObj]));
        } else if (numbers[i].includes("/")) {
          let splitedObj = numbers[i].split("/");
          numbers[i] = splitedObj[0];
          splitedObj.shift();
          sumHandler(numbers);
          divideHandler(Object.assign([result.value, ...splitedObj]));
        } else {
          sumHandler(numbers);
        }
      }
    } else if (result.value[i] == "-") {
      numbers = result.value.split("-");
      for (let i = 0; i < numbers.length; i++) {
        console.log(numbers, numbers[i]);
        if (numbers[i].includes("+")) {
          let splitedObj = numbers[i].split("+");
          numbers[i] = splitedObj[0];
          splitedObj.shift();
          subtractHandler(numbers);
          sumHandler(Object.assign([result.value, ...splitedObj]));
        } else if (numbers[i].includes("*")) {
          let splitedObj = numbers[i].split("*");
          numbers[i] = splitedObj[0];
          splitedObj.shift();
          subtractHandler(numbers);
          multiplyHandler(Object.assign([result.value, ...splitedObj]));
        } else if (numbers[i].includes("/")) {
          let splitedObj = numbers[i].split("/");
          numbers[i] = splitedObj[0];
          splitedObj.shift();
          subtractHandler(numbers);
          divideHandler(Object.assign([result.value, ...splitedObj]));
        } else {
          subtractHandler(numbers);
        }
      }
    } else if (result.value[i] == "*") {
      numbers = result.value.split("*");
      for (let i = 0; i < numbers.length; i++) {
        console.log(numbers, numbers[i]);
        if (numbers[i].includes("+")) {
          let splitedObj = numbers[i].split("+");
          numbers[i] = splitedObj[0];
          splitedObj.shift();
          multiplyHandler(numbers);
          sumHandler(Object.assign([result.value, ...splitedObj]));
        } else if (numbers[i].includes("-")) {
          let splitedObj = numbers[i].split("-");
          numbers[i] = splitedObj[0];
          splitedObj.shift();
          multiplyHandler(numbers);
          subtractHandler(Object.assign([result.value, ...splitedObj]));
        } else if (numbers[i].includes("/")) {
          let splitedObj = numbers[i].split("/");
          numbers[i] = splitedObj[0];
          splitedObj.shift();
          multiplyHandler(numbers);
          divideHandler(Object.assign([result.value, ...splitedObj]));
        } else {
          multiplyHandler(numbers);
        }
      }
    } else if (result.value[i] == "/") {
      numbers = result.value.split("/");
      for (let i = 0; i < numbers.length; i++) {
        console.log(numbers, numbers[i]);
        if (numbers[i].includes("+")) {
          let splitedObj = numbers[i].split("+");
          numbers[i] = splitedObj[0];
          splitedObj.shift();
          divideHandler(numbers);
          sumHandler(Object.assign([result.value, ...splitedObj]));
        } else if (numbers[i].includes("-")) {
          let splitedObj = numbers[i].split("-");
          numbers[i] = splitedObj[0];
          splitedObj.shift();
          divideHandler(numbers);
          subtractHandler(Object.assign([result.value, ...splitedObj]));
        } else if (numbers[i].includes("*")) {
          let splitedObj = numbers[i].split("*");
          numbers[i] = splitedObj[0];
          splitedObj.shift();
          divideHandler(numbers);
          multiplyHandler(Object.assign([result.value, ...splitedObj]));
        } else {
          divideHandler(numbers);
        }
      }
    }
  }
});
