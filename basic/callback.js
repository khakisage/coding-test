// 다른 함수의 매개변수로 전달되어 수행되는 함수 -> 콜백 함수.
// 콜백함수를 인자로 받아 호출하는 함수 -> 고차 함수.

function callback_func() {
  console.log("I'm callback function");
}

function higher_order_func(callback) {
  console.log("I'm higher-order function");
  callback();
}

higher_order_func(callback_func);

function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function mul(x, y) {
  return x * y;
}

function div(x, y) {
  return x / y;
}

function calculator(callback, x, y) {
  return callback(x, y);
}

console.log(calculator(add, 1, 2));
console.log(calculator(sub, 5, 3));
console.log(calculator(mul, 3, 6));
console.log(calculator(div, 4, 2));
