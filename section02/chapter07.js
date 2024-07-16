// 6가지의 요소 조작 메서드
// 1. push : 배열의 마지막에 요소 추가
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5);
console.log('새로운 길이:', newLength);
console.log('push 후 배열:', arr1);

// 2. pop : 배열의 마지막 요소 제거
const lastItem = arr1.pop();
console.log('제거된 마지막 요소:', lastItem);
console.log('pop 후 배열:', arr1);

// 3. shift : 배열의 처음 요소 제거
const firstItem = arr1.shift();
console.log('제거된 첫 번째 요소:', firstItem);
console.log('shift 후 배열:', arr1);

// 4. unshift : 배열의 처음에 요소 추가
const newLength2 = arr1.unshift(0);
console.log('새로운 길이:', newLength2);
console.log('unshift 후 배열:', arr1);

// 5. slice : 배열의 일부분을 추출하여 새로운 배열로 반환
const newArr1 = arr1.slice(1, 3);
console.log('추출된 새로운 배열:', newArr1);
console.log('slice 후 원본 배열:', arr1);

// 6. concat : 배열 두 개를 연결하여 새로운 배열 반환
const arr2 = [6, 7, 8];
const newArr2 = arr1.concat(arr2);
console.log('연결된 새로운 배열:', newArr2);
console.log('concat 후 원본 배열:', arr1);
