//형변환

// 1. 묵시정 형변환 -> 자스엔진이 알아서 형변환 해버림
let num = 10;
let strt = '20';

const result = num + strt; // num이 묵시적으로 string으로 변환됨.
console.log(result);

// 2. 명시적 형 변환 -> 개발자가 직접 형 변환을 명시
let str1 = '10';
let strToNum1 = Number(str1);
console.log(10 + strToNum1);

let str2 = '10개';
let strtToNum2 = parseInt(str2); // Number 대신 parseInt하면 '개'개 날라가고 숫자만 남네?
console.log(strtToNum2);

// 숫자 -> 문자

let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1 + '입니다');
