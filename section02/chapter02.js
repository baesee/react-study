// 단락평가
// 단락평가는 논리 연산에서 첫 번째 피연산자가 결과를 결정할 수 있는 경우 두 번째 피연산자를 평가하지 않는 것을 의미합니다.
// 예를 들어, 논리 AND 연산자 (&&)는 첫 번째 피연산자가 false인 경우 두 번째 피연산자를 평가하지 않습니다.
// 논리 OR 연산자 (||)는 첫 번째 피연산자가 true인 경우 두 번째 피연산자를 평가하지 않습니다.

function returnFalse() {
    console.log('펄스');
    return false;
}

function returlTru() {
    console.log('트루');
    return true;
}
console.log(returnFalse() && returlTru());

// 활용사례
function printName(person) {
    if (!person) {
        console.log('person에 값이 없음');
        return;
    }
    console.log(person.name);

    //(person && console.log(person.name)) || console.log('person에 값이 없음'); // 활용사례1

    // 활용사례 2
    const name = person && person.name;
    console.log(name || '펄슨에 값이 없음');
}

printName();
printName({ name: 'aaa' });
