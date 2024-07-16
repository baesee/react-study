// 얕은 복사
// 깊은복사 샘플코드 :
// 얕은 복사 샘플코드
const originalArray = [1, 2, 3];
const shallowCopyArray = originalArray;

console.log('originalArray:', originalArray);
console.log('shallowCopyArray:', shallowCopyArray);

shallowCopyArray[0] = 99;

console.log('After modification:');
console.log('originalArray:', originalArray);
console.log('shallowCopyArray:', shallowCopyArray);

const originalObject = { a: 1, b: 2 };
const shallowCopyObject = originalObject;

console.log('originalObject:', originalObject);
console.log('shallowCopyObject:', shallowCopyObject);

shallowCopyObject.a = 99;

console.log('After modification:');
console.log('originalObject:', originalObject);
console.log('shallowCopyObject:', shallowCopyObject);
