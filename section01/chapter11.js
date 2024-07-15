// 함수 선언

function greeting() {
    console.log('안녕하세요오오오오');
}

console.log('호출 전');
greeting();

function getArea(width, height) {
    // let width = 10;
    // let height = 20;
    let area = width * height;
    console.log(area);
    return area;
}

getArea(30, 40);

let area1 = getArea(20, 30);
console.log('변수 : ' + area1);
