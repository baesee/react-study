import { useState } from 'react';

// 3가지 hook 관련 팁
// 1. 함수 컴포넌트 , 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출 될 수 없다.
// 3. 나만의 훅(Custom Hook)직접 만들 수 있다.

// Tip 1. : 컴포넌트 외부에서는 호출이 안된다.
//const state = useState();

// Tip 3. : 커스텀 훅을 만들때에는 접두어 'use'를 사용하면 된다.
// 그러면 그 안에서는 react hook이 사용가능하다.
function useInput() {
    const [input, setInput] = useState();

    const onChange = (e) => {
        setInput(e.target.value);
    };
    return { input, onChange };
}

const HooeExam = () => {
    // Tip 1. : 여기서만 호출이 된다.
    const state = useState();

    // Tip 2. 조건문이나 반복문에서는 호출불가하다. 아래는 예시
    /*
    if (true) {
        const stateCondtion = useState();
    }
    for (;;) {
        const stateCondtion = useState();
    }
    */

    // Tip 3. 커스텀 훅 사용
    const [input, onChange] = useInput();

    return (
        <div>
            훅 테스트
            <input value={input} onChange={onChange} />
        </div>
    );
};

export default HooeExam;
