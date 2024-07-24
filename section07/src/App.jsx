import { useState, useEffect, useRef } from 'react';
import './App.css';
import Controller from './components/Controller';
import Viewer from './components/Viewer';
import Even from './components/Even';

function App() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');

    const isMount = useRef(false);

    // 여기서 'count'를 의존성 배열(dependency array, deps)라고 한다.
    // useEffect(() => {
    //     console.log('유즈 이펙트 , 카운터 : ', count, input);
    // }, [count, input]); // 두번쨰 인수, 배열의 값이 바뀌면 첫번쨰 인수 콜백함수가 실행

    // 마운트 : 컴포넌트가 처음 만들어질 때 한번 실행되는 것
    // 언마운트 : 컴포넌트가 사라질 때 한번 실행되는 것
    // 1. '마운트'를 useEffect 실행
    useEffect(() => {
        console.log(
            ' [mount] 마운트, 최초 랜더일때 하번만 실행, 뎁스(deps)로는 빈배열로 !'
        );
    }, []);

    //2. '업데이트(변화, 리랜더링)'시 useEffect 실행
    // deps 뎁스 , 두번째 인자에 값(배열)을 넣지 않는다
    useEffect(() => {
        if (!isMount.current) {
            // 정말로 컴포넌트가 업데이트가 되었을때만 해당 useEffect를 호출되기를 원할때 사용
            isMount.current = true;
            return;
        }
        console.log(' [update] 업데이트, 리랜더링 될때 실행');
    });

    const onClickButton = (value) => {
        if (value === 0) {
            setCount(0);
        } else {
            setCount(count + value);
        }
    };
    return (
        <div className="App">
            <h1>Simple Counter</h1>
            <section>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </section>
            <section>
                <Viewer count={count} />
                {count % 2 === 0 ? <Even /> : null}
            </section>
            <section>
                <Controller onClickButton={onClickButton} />
            </section>
        </div>
    );
}

export default App;
