//스코프
// ~> 전역(전체)스코프 / 지역 스코프
// 전역 : 전체 영역 접근가능
// 지역 : 특정 영역에서만 접근 가능

let a = 1;

function funcA() {
    let b = 2;
    console.log(a);
}

funcA();
console.log(b);
