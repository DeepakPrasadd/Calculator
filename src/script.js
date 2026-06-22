let result = document.querySelector('#result');

let numbersClass = document.querySelector('.numbers');
let operatorClass = document.querySelector('.operators');

let equal = document.querySelector('#equal');
let clear = document.querySelector('#clear');

numbersClass.addEventListener('click', (event) => {
  let value = event.target.textContent;

  if (result.value[0] === '0') {
    if (value === '1' && result.value.length === 1) result.value = value;
    else if (value === '2' && result.value.length === 1) result.value = value;
    else if (value === '3' && result.value.length === 1) result.value = value;
    else if (value === '4' && result.value.length === 1) result.value = value;
    else if (value === '5' && result.value.length === 1) result.value = value;
    else if (value === '6' && result.value.length === 1) result.value = value;
    else if (value === '7' && result.value.length === 1) result.value = value;
    else if (value === '8' && result.value.length === 1) result.value = value;
    else if (value === '9' && result.value.length === 1) result.value = value;
    else if (value === '.' && result.value.length === 1) result.value += value;
    else if (value === '1' && result.value.length > 1) result.value += value;
    else if (value === '2' && result.value.length > 1) result.value += value;
    else if (value === '3' && result.value.length > 1) result.value += value;
    else if (value === '4' && result.value.length > 1) result.value += value;
    else if (value === '5' && result.value.length > 1) result.value += value;
    else if (value === '6' && result.value.length > 1) result.value += value;
    else if (value === '7' && result.value.length > 1) result.value += value;
    else if (value === '8' && result.value.length > 1) result.value += value;
    else if (value === '9' && result.value.length > 1) result.value += value;
    else if (value === '0' && result.value.length > 1) result.value += value;
    else if (value === '00' && result.value.length > 1) result.value += value;
    else if (value === '.' && result.value.length > 1) {
      if (
        result.value.endsWith('+') ||
        result.value.endsWith('-') ||
        result.value.endsWith('*') ||
        result.value.endsWith('/')
      ) {
        let arr = Array.from(result.value);
        arr.pop();
        arr.push(value);
        result.value = arr.join('');
      } else if (!result.value.endsWith('.')) result.value += value;
    }
  } else if (value === '.') {
    if (
      result.value.endsWith('+') ||
      result.value.endsWith('-') ||
      result.value.endsWith('*') ||
      result.value.endsWith('/')
    ) {
      let arr = Array.from(result.value);
      arr.pop();
      arr.push(value);
      result.value = arr.join('');
    } else if (!result.value.endsWith('.')) result.value += value;
  } else {
    result.value += value;
  }
});

operatorClass.addEventListener('click', (event) => {
  let value = event.target.textContent;

  if (value === '+') {
    if (
      result.value.endsWith('-') ||
      result.value.endsWith('*') ||
      result.value.endsWith('/') ||
      result.value.endsWith('.')
    ) {
      let arr = Array.from(result.value);
      arr.pop();
      arr.push(value);
      result.value = arr.join('');
    } else if (!result.value.endsWith('+')) result.value += value;
  } else if (value === '-') {
    if (
      result.value.endsWith('+') ||
      result.value.endsWith('*') ||
      result.value.endsWith('/') ||
      result.value.endsWith('.')
    ) {
      let arr = Array.from(result.value);
      arr.pop();
      arr.push(value);
      result.value = arr.join('');
    } else if (!result.value.endsWith('-')) result.value += value;
  } else if (value === '*') {
    if (
      result.value.endsWith('+') ||
      result.value.endsWith('-') ||
      result.value.endsWith('/') ||
      result.value.endsWith('.')
    ) {
      let arr = Array.from(result.value);
      arr.pop();
      arr.push(value);
      result.value = arr.join('');
    } else if (!result.value.endsWith('*')) result.value += value;
  } else if (value === '/') {
    if (
      result.value.endsWith('+') ||
      result.value.endsWith('-') ||
      result.value.endsWith('*') ||
      result.value.endsWith('.')
    ) {
      let arr = Array.from(result.value);
      arr.pop();
      arr.push(value);
      result.value = arr.join('');
    } else if (!result.value.endsWith('/')) result.value += value;
  } else {
    result.value += value;
  }
});

// function sumHandler(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += Number(numbers[i]);
//     result.value = String(sum);
//   }
// }

// function subtractHandler(numbers) {
//   let subtract = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//     subtract -= Number(numbers[i]);
//     result.value = String(subtract);
//   }
// }

// function multiplyHandler(numbers) {
//   let multiply = 1;
//   for (let i = 0; i < numbers.length; i++) {
//     multiply *= Number(numbers[i]);
//     result.value = String(multiply);
//   }
// }

// function divideHandler(numbers) {
//   let divide = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//     divide /= Number(numbers[i]);
//     result.value = String(divide);
//   }
// }

// TargetHandler(numbersClass);
// TargetHandler(operatorClass);

clear.addEventListener('click', () => {
  result.value = '0';
});

back.addEventListener('click', () => {
  if (result.value.length === 1) {
    result.value = '0';
    console.log(result.value.length);
  } else {
    let arr = Array.from(result.value);
    arr.pop();
    result.value = arr.join('');
  }
});

// equal.addEventListener('click', () => {
//   let numbers;

//   for (let i = 0; i < result.value.length; i++) {
//     if (result.value[i] == '+') {
//       numbers = result.value.split('+');
//       for (let i = 0; i < numbers.length; i++) {
//         console.log(numbers, numbers[i]);
//         if (numbers[i].includes('-')) {
//           let splitedObj = numbers[i].split('-');
//           numbers[i] = splitedObj[0];
//           splitedObj.shift();
//           sumHandler(numbers);
//           subtractHandler(Object.assign([result.value, ...splitedObj]));
//         } else if (numbers[i].includes('*')) {
//           let splitedObj = numbers[i].split('*');
//           numbers[i] = splitedObj[0];
//           splitedObj.shift();
//           sumHandler(numbers);
//           multiplyHandler(Object.assign([result.value, ...splitedObj]));
//         } else if (numbers[i].includes('/')) {
//           let splitedObj = numbers[i].split('/');
//           numbers[i] = splitedObj[0];
//           splitedObj.shift();
//           sumHandler(numbers);
//           divideHandler(Object.assign([result.value, ...splitedObj]));
//         } else {
//           sumHandler(numbers);
//         }
//       }
//     } else if (result.value[i] == '-') {
//       numbers = result.value.split('-');
//       for (let i = 0; i < numbers.length; i++) {
//         console.log(numbers, numbers[i]);
//         if (numbers[i].includes('+')) {
//           let splitedObj = numbers[i].split('+');
//           numbers[i] = splitedObj[0];
//           splitedObj.shift();
//           subtractHandler(numbers);
//           sumHandler(Object.assign([result.value, ...splitedObj]));
//         } else if (numbers[i].includes('*')) {
//           let splitedObj = numbers[i].split('*');
//           numbers[i] = splitedObj[0];
//           splitedObj.shift();
//           subtractHandler(numbers);
//           multiplyHandler(Object.assign([result.value, ...splitedObj]));
//         } else if (numbers[i].includes('/')) {
//           let splitedObj = numbers[i].split('/');
//           numbers[i] = splitedObj[0];
//           splitedObj.shift();
//           subtractHandler(numbers);
//           divideHandler(Object.assign([result.value, ...splitedObj]));
//         } else {
//           subtractHandler(numbers);
//         }
//       }
//     } else if (result.value[i] == '*') {
//       numbers = result.value.split('*');
//       for (let i = 0; i < numbers.length; i++) {
//         console.log(numbers, numbers[i]);
//         if (numbers[i].includes('+')) {
//           let splitedObj = numbers[i].split('+');
//           numbers[i] = splitedObj[0];
//           splitedObj.shift();
//           multiplyHandler(numbers);
//           sumHandler(Object.assign([result.value, ...splitedObj]));
//         } else if (numbers[i].includes('-')) {
//           let splitedObj = numbers[i].split('-');
//           numbers[i] = splitedObj[0];
//           splitedObj.shift();
//           multiplyHandler(numbers);
//           subtractHandler(Object.assign([result.value, ...splitedObj]));
//         } else if (numbers[i].includes('/')) {
//           let splitedObj = numbers[i].split('/');
//           numbers[i] = splitedObj[0];
//           splitedObj.shift();
//           multiplyHandler(numbers);
//           divideHandler(Object.assign([result.value, ...splitedObj]));
//         } else {
//           multiplyHandler(numbers);
//         }
//       }
//     } else if (result.value[i] == '/') {
//       numbers = result.value.split('/');
//       for (let i = 0; i < numbers.length; i++) {
//         console.log(numbers, numbers[i]);
//         if (numbers[i].includes('+')) {
//           let splitedObj = numbers[i].split('+');
//           numbers[i] = splitedObj[0];
//           splitedObj.shift();
//           divideHandler(numbers);
//           sumHandler(Object.assign([result.value, ...splitedObj]));
//         } else if (numbers[i].includes('-')) {
//           let splitedObj = numbers[i].split('-');
//           numbers[i] = splitedObj[0];
//           splitedObj.shift();
//           divideHandler(numbers);
//           subtractHandler(Object.assign([result.value, ...splitedObj]));
//         } else if (numbers[i].includes('*')) {
//           let splitedObj = numbers[i].split('*');
//           numbers[i] = splitedObj[0];
//           splitedObj.shift();
//           divideHandler(numbers);
//           multiplyHandler(Object.assign([result.value, ...splitedObj]));
//         } else {
//           divideHandler(numbers);
//         }
//       }
//     }
//   }
// });

equal.addEventListener('click', () => {
  result.value = eval(result.value);
});
