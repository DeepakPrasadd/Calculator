let result = document.querySelector("#result");

let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let zero = document.querySelector("#zero");

let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let equal = document.querySelector("#equal");

function TargetHandler(name){
    name.addEventListener("click",(event)=>{result.value += event.target.textContent; console.log(event)})
}

function OperatorHandler(name){
    name.addEventListener("click",(event)=>{result.value += event.target.textContent; console.log(event)})
}

TargetHandler(one);
TargetHandler(two);
TargetHandler(three);
TargetHandler(four);
TargetHandler(five);
TargetHandler(six);
TargetHandler(seven);
TargetHandler(eight);
TargetHandler(nine);
TargetHandler(zero);

OperatorHandler(plus);
OperatorHandler(minus);
OperatorHandler(multiply);
OperatorHandler(divide);
// OperatorHandler(equal);



// switch(document.querySelector("#one")){
//     case "one":
//         TargetHandler("one");
//         break;
//             case "two":
//         TargetHandler(two);
//         break;
//             case "three":
//         TargetHandler(three);
//         break;
// }


// one.addEventListener("click",(event)=>{console.log(result.value = event.target.textContent)})


