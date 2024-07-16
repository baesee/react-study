// 5가지 요소 순회 및 탐색 메서드
// 1. forEach : 배열의 각 요소에 대해 주어진 함수를 실행
let arr1 = [1, 2, 3];
arr1.forEach(function (item, idx, arr) {
    // console.log(idx, item * 2);
});

let doubledArr = [];
arr1.forEach((item) => {
    doubledArr.push(item * 2);
});
console.log(doubledArr);

// 2. includes : 배열에 특정 요소가 포함되어 있는지 확인하고 불리언 값 반환
console.log(arr1.includes(2));
// 3. indexOf : 배열에서 주어진 요소의 첫 번째 인덱스를 반환
console.log(arr1.indexOf(2));
// 4. findIndex : 배열에 모든 요소를 순회하면서 주어진 함수를 만족하는 첫 번째 요소의 인덱스를 반환
let arr4 = [1, 2, 3];
// const finededIndex = arr4.findIndex((item) => {
//     if (item === 2) return true;
// });

const finededIndex = arr4.findIndex((item) => item === 3);
console.log(finededIndex);

// 5. find : 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데 , 요소를 그대로 반환.
let arr5 = [{ name: '홍길동' }, { name: '이순신' }, { name: '유관순' }];

const foundItem = arr5.find((item) => item.name === '이순신');
console.log(foundItem);
