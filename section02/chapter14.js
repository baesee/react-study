// async : 비동기 함수, 어떤 함수를 비동기 함수로 만들어주는 키워드
// -> 함수가 프로미스를 반환하도록 반환해주는 그런 키워드
async function getData() {
    return {
        name: '홍길동',
        age: 20,
    };
}

console.log(getData());

// await : 비동기 함수 안에서 동기적으로 기다리게 함
// async 함수 내부에서만 사용이 가능한 키워드

async function printData() {
    const data = await getData();
    console.log('gggggg', data);
}

printData();
