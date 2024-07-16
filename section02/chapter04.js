// 1. Spread 연산자
// 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려준다.

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];

console.log(arr2);

let obj1 = {
    a: 1,
    b: 2,
};
let obj2 = {
    ...obj1,
    c: 3,
    d: 4,
};

console.log(obj2);

function funcA(p1, p2, p3) {
    console.log(p1, p2, p3);
}
funcA(...arr1);

// 2. Rest 매개변수 : 매개변수의 개수를 모르는 경우
// 매개변수 앞에 ...을 붙여서 사용한다.
// 매개변수의 개수를 모르는 경우 사용한다.

function funcB(one, ...rest) {
    console.log('one : ' + one);
    console.log('rest : ' + rest);
}

funcB(...arr1);
