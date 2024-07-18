import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Button from './components/Button';
import { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);
    const [light, setLight] = useState('OFF');

    /*   이벤트 처리 
  const buttonProps = {
        text: '메일',
        color: 'red',
        a: 1,
        b: 2,
        c: 3,
    };
    */
    return (
        <>
            <div>
                <h1>{light}</h1>
                <button
                    onClick={() => {
                        setLight(light === 'ON' ? 'OFF' : 'ON');
                    }}
                >
                    {light === 'ON' ? '라이트 끄기' : '라이트 켜기'}
                </button>
            </div>
            <div>
                <h1>{count}</h1>
                <button onClick={() => setCount(count + 1)}>+</button>
                {/*  이벤트 처리 
            <Button {...buttonProps} />
            <Button text={'카페'} />
            <Button text={'블로그'}>
                <div>자식요소</div>
            </Button> */}
            </div>
        </>
    );
}

export default App;
