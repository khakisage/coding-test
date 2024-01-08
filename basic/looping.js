// for 반복문으로 0 부터 10까지의 정수 중 짝수의 합을 구한 뒤 출력하는 코드를 작성하시오.
const UNTIL_NUM = 10;
let sum = 0;

for (let i = 0; i <= UNTIL_NUM; i++) {
  if (i % 2 === 0) {
    sum += i;
  } else {
    continue;
  }
}

console.log(sum);

// 구구단 2에서 9단까지 출력하는 코드를 작성하시오.
for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}
