import './Main.css';
// JSX 주의 사항 :
// 1. 중괄호{} 안에는 자바스크립트 표현식(값으로 치환될수 있는)만 작성할 수 있다.
// 2. 숫자, 문자열, 배열 값만 랜더링 된다. , boolean, undefined, null, Object 과 같은애들은 화면에 렌더링 되지 않는다.
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야만 한다.

const Main = () => {
    const user = {
        name: '홍길동',
        age: 20,
        isLoggedIn: true,
    };
    if (user.isLoggedIn) {
        return <div className="logout">로그아웃</div>;
    }
    return <div>로그인</div>;
    // return <>{user.isLoggedIn ? <div>로그아웃</div> : <div>로그인</div>}</>;
};

export default Main;
