// 동기 비동기

console.log(1);
console.log(2);
// 셋타임아웃
setTimeout(() => {
    console.log(3);
}, 1000);

console.log(4);
// 예상 결과값 출력 : 1, 2, 4, 3
