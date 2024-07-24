import { useState, useEffect } from 'react';
import './App.css';
import Controller from './components/Controller';
import Viewer from './components/Viewer';

function App() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');

    // 여기서 'count'를 의존성 배열(dependency array, deps)라고 한다.
    useEffect(() => {
        console.log('유즈 이펙트 , 카운터 : ', count, input);
    }, [count, input]); // 두번쨰 인수, 배열의 값이 바뀌면 첫번쨰 인수 콜백함수가 실행

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
            </section>
            <section>
                <Controller onClickButton={onClickButton} />
            </section>
        </div>
    );
}

export default App;
