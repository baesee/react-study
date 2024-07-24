import { useEffect } from 'react';
const Even = () => {
    // 3. unmount시 useEffect
    // 사용 설명 예시
    // 1. useEffect( () => {} , []) -> 빈 배열일때 : 마운트, 화면이 최초에 한번 랜더링 될때 호출됨.
    // 2. 유즈 이펙트 내에서 return  의 경우 해당 컴포넌트가 사라질때 실행이 된다.
    // 3. 그러므로 useEffct( () => { return () => {}; },[]) 인 경우에는 마운트가 사라지게 되면 useEffect내의 리턴문(클린업, 정리함수)이 실행된다.

    useEffect(() => {
        // 유즈 이펙트의 콜백함수가 반환하는 함수 : 클린업, 정리함수
        return () => {
            console.log('unmount');
        };
    }, []);

    return (
        <div>
            <h1>짝수입니다.</h1>
        </div>
    );
};

export default Even;
