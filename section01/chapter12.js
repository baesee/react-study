// 함수 선언

// 화살표 함수
let varC = (value) => {
    console.log('매개변수 값 : ' + value);
    return value + 1;
};

let varCsimple = () => '화살표함수';

console.log(varC(10));

console.log(varCsimple());
