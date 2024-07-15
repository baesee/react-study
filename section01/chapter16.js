//1. 상수(const) 객체
const animal = {
    type: '고냥이',
    name: '나비',
    color: 'black',
};

console.log(animal);

// 상수 객체여도 프로퍼티는 수정,변경,삭제는 가능
animal.age = 5; // 프로퍼티 추가
animal.name = '나비야나비야'; // 프로퍼티 수정
delete animal.color; // 프로퍼티 삭제

console.log(animal);
//2. 메서드
// -> 프러피티 값이 함수인 것을 말함
const persion = {
    name: '홍길동',
    sayHi: function () {
        console.log('안녕하세요 나는 홍길동');
    },
    sayBye: () => console.log('바이바이 나는 에로우 함수'),
    sayShort() {
        // 메서드 선언
        console.log('제일 짧다');
    },
};

persion.sayHi();
persion.sayBye();
persion.sayShort();
