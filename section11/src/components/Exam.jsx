import { useReducer } from 'react';

// reducer : 변환기
// -> 상태를 실제로 변화시키는 변환기 역할
function reducer(state, action) {
    console.log('state : ', state, ' action : ', action);
    switch (action.type) {
        case 'INCREASE':
            return state + action.data;
        case 'DECREASE':
            return state - action.data;
        default:
            return state;
    }
}

const Exam = () => {
    // dispatch 함수를 통해서 상태를 변경하는 함수
    // -> 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수.
    const [state, dispatch] = useReducer(reducer, 0);

    const onClcikPlus = () => {
        // 인수 : 상태가 어떻게 변화되길 원하는지
        // -> 액션 객체 (인수)
        dispatch({
            type: 'INCREASE',
            data: 1,
        });
    };

    const onClickMinus = () => {
        dispatch({
            type: 'DECREASE',
            data: 1,
        });
    };

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={onClcikPlus}>+</button>
            <button onClick={onClickMinus}>-</button>
        </div>
    );
};

export default Exam;
