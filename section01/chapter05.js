// 타입에 대해서 배워보자잉
console.log('챕터5 타입을 배워보자');

//  원시타입에 대해 배워보자잉

// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);

let inf = Infinity;
console.log(inf);
let mInf = -Infinity;
let nan = NaN; // 낫 어 넘버 , 수치 연삭이 실패했을떄 결과값으로 사용한다.
console.log(1 * 'hello'); // -> NaN

// 2. String Type
let myName = '배배배배';
let MyLocation = '서울';
let myInfo = myName + MyLocation;
console.log(myInfo);

let introduceText = `${myName}은 ${MyLocation}에 산다`; //템플릿 리터럴 문법
console.log(introduceText);

// 3. Boolean Type
let isSwitchOn = true;
let isEmtpy = false;

// 4. Null Type
let empty = null;

// 5. Undefined Type
let none;
console.log(none);
