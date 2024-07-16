// 5가지 배열 변형 메서드
// 1. filter : 배열에서 주어진 함수를 만족하는 요소를 찾아서 새로운 배열로 반환

let arr1 = [
    { name: '홍길동', hobby: '테니스' },
    { name: '이순신', hobby: '테니스' },
    { name: '유관순', hobby: '농구' },
];

const tennisPeople = arr1.filter((item) => item.hobby === '테니스');
console.log(tennisPeople);

// 2. map : 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행, 그 결과값들 모아서 새로운 배열로 변환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
    return item * 3;
});
console.log(mapResult1);

let names = arr1.map((item) => item.name);
console.log(names);

// 3. sort : 배열을 '사전순'으로 정렬하는 메서드,
// .sort()만으로는 숫자 정렬이 안됨, '사전순'이기때문에
let arr3 = ['b', 'a', 'c'];
arr3.sort();
console.log(arr3);

let arr4 = [5, 6, 1, 77, 4, 155, 23, 23, 58, 56];
// sort() 오름차순 정렬
arr4.sort((a, b) => a - b);
console.log(arr4);

// sort() 내림차순 정렬
arr4.sort((a, b) => b - a);
console.log(arr4);

// 4. toSorted : 원본배열은 놔두고 새로운 배열을 반환한다.
let arr5 = ['c', 'a', 'b'];
const sortedArr5 = arr5.toSorted();
console.log(sortedArr5);
console.log(arr5);

// 5. join : 배열의 모든 요소를 연결해서 하나의 문자열로 반환
let arr6 = ['a', 'b', 'c'];
const joinedArr6 = arr6.join('');
console.log(joinedArr6);

// 안녕, 반가워 두 문자열 합치기
let str1 = '안녕';
let str2 = '반가워';
const result = [str1, str2].join(', ');
console.log(result);
