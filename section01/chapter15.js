//객체

// 1. 객체생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 방식(대부분 사용)

// 2. 객체 프로퍼티(속성, name, age, hobby )e
let persion = {
    name: '홍길동',
    age: 33,
    hobby: '테니스',
    job: 'house keeper',
};

// 3. 객체 프로퍼티 다루는 법
// 3.1 특정 프로퍼티에 접근 ,점표기법
let name = persion.name;
console.log(name);

// 3.2 괄효 표기법
let age = persion['age'];
console.log(age);

// 4. 새로운 프로퍼티 추가
persion.city = '서울';
persion['sport'] = '농구';

let city = persion.city;
console.log(city);

let sport = persion.sport;
console.log(sport);

console.log(persion);
// 5. 객체 프로퍼티 삭제
delete persion.job;
delete persion['sport'];

console.log(persion);

// 6. 프로퍼티 존재 유무 확인방법 (in연산자)
let result1 = 'name' in persion; // persion 객체에 'name'프로퍼티가 있는가?
console.log(result1);
