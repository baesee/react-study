function add10(num) {
    const promise = new Promise((resolve, reject) => {
        // 비동기 작업
        // executor

        setTimeout(() => {
            if (typeof num === 'number') {
                resolve(num + 10);
            } else {
                reject('num이 숫자가 아님니다.');
            }
            // console.log(' hihihi');
            // resolve('ok');
            // reject('왜 실패했는지의 이유');
        }, 2000);
    });
    return promise;
}

// 프로미스의 값을 사용하려면 'then( 그 후에..)'을 사용

const p = add10(2);
p.then((result) => {
    console.log(result);
}).catch((error) => {
    console.error(error);
});
