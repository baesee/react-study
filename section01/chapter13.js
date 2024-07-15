//콜백함수: 다른 함수의 인자로 전달되어 실행되는 함수

function default_main(callback) {
    callback();
}

function default_sub() {
    console.log('안녕하세요 디폴트!');
}
default_main(default_sub);
// --------------------

function main(value) {
    //console.log(value);
    console.log(1);
    console.log(2);
    value();
    console.log('end');
}
function sub() {
    console.log('i am sub');
}

// main(sub);

// main(() => console.log('허허'));

// 2. 콜백함수의 활용
function repeact(count, callback) {
    for (let idx = 1; idx <= count; idx++) {
        // console.log(idx);
        callback(idx);
    }
}

function repeactDouble(count) {
    for (let idx = 1; idx <= count; idx++) {
        console.log(idx * 2);
    }
}

repeact(5, (idx) => {
    console.log(idx);
});

console.log('===');
// repeactDouble(5);

repeact(5, function (idx) {
    console.log(idx * 2);
});
