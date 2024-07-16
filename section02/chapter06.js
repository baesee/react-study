// 1. 배열 순회
let arr = [1, 2, 3];

// 1. 배열 인덱스
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}

console.log('=======');
// 1.2 'for of' 반복문
for (let item of arr) {
    console.log(item);
}

// 2. 객체 순회
let persion = {
    name: '홍길동',
    age: 20,
    gender: '남',
};

// 2.1 Object.keys사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(persion);
console.log(keys);

for (let item of keys) {
    console.log(item, persion[item]);
}
console.log('=======');

// 2.2 Object.values 사용
// -> 객체에서 value값만 뽑아서 새로운 배열로 반환
let values = Object.values(persion);
console.log(values);
for (let item of values) {
    console.log(item);
}
console.log('=======');

// 2.3 for in 사용
for (let item in persion) {
    console.log(item, persion[item]);
}
