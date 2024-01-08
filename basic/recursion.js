// 함수 스스로 자신을 참조해 호출하면서 동일한 코드가 계속적으로 수행되는 함수 호출 방법
// 특정 조건이 됐을 때 호출을 중지 하도록 제한하는 exit code가 필수.
// stack을 통해 호출 횟수를 기록한다.

// basic
function recursive(num) {
  if (num === 0) return 0;
  return num + recursive(num - 1);
}

console.log(recursive(3));

// factorial
// 3! = 3 * 2 * 1;
function factorial(num) {
  if (num == 0) return 1;
  return num * recursive(num - 1);
}

console.log(factorial(4));
