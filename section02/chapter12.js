function add(a, b, callback) {
    setTimeout(() => {
        const sum = a + b;
        console.log('안녕', sum);
        callback(sum);
    }, 3000);
}

add(4, 5, (value) => {
    console.log(value);
});

// 음식을 주문하는 상황
function orderFood(callback) {
    setTimeout(() => {
        const food = '떡볶이';
        callback(food);
    }, 3000);
}

function cooldownFood(food, callback) {
    setTimeout(() => {
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownedFood);
    }, 2000);
}

function freezeFood(food, callback) {
    setTimeout(() => {
        const frozenFood = `얼어버린 ${food}`;
        callback(frozenFood);
    }, 1500);
}

orderFood((food) => {
    // orderFood 함수가 호출되고 3초 후에 콜백 함수가 실행됩니다.
    console.log('주문한 음식:', food);
    cooldownFood(food, (cooldownedFood) => {
        // cooldownFood 함수가 호출되고 2초 후에 콜백 함수가 실행됩니다.
        console.log('조리 완료:', cooldownedFood);

        freezeFood(cooldownedFood, (frozenFood) => {
            // freezeFood 함수가 호출되고 1.5초 후에 콜백 함수가 실행됩니다.
            console.log('얼어버린 음식:', frozenFood);
        });
    });
});
