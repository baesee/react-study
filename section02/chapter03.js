// 구조분해 할당 : 객체나 배열의 속성을 분해하여 변수에 쉽게 할당할 수 있게 하는 자바스크립트의 표현식입니다.
// 예를 들어, 객체의 속성을 변수에 할당할 때 유용합니다.
// const { name, age } = person; // person 객체의 name과 age 속성을 각각의 변수에 할당
// 배열의 요소를 변수에 할당할 때도 사용할 수 있습니다.
// const [first, second] = array; // array 배열의 첫 번째와 두 번째 요소를 각각의 변수에 할당

// 1. 배열의 구조 분해 할당
const fruits = ['사과', '바나나', '체리'];
const [firstFruit, secondFruit, thirdFruit] = fruits;

console.log(firstFruit); // 사과
console.log(secondFruit); // 바나나
console.log(thirdFruit); // 체리

// 2. 객체의 구조분해 할당
const person = {
    name: '홍길동',
    age: 30,
    job: '개발자',
};

const { name, age: myAge, job } = person;

console.log(name); // 홍길동
console.log(myAge); // 30
console.log(job); // 개발자

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수 받는 법
const func = ({ name, age, job }) => {
    console.log(name, age, job);
};

func(person);
