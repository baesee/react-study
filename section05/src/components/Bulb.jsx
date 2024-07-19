import { useState } from 'react';

const Bulb = () => {
    const [light, setLight] = useState('OFF');
    // 부모 컴포넌트에서 상태가 변경이 되면 자식 컴포넌트는 리랜더링이 된다.
    console.log(light);
    return (
        <>
            <div>
                {light === 'ON' ? (
                    <h1 style={{ backgroundColor: 'orange' }}>ON</h1>
                ) : (
                    <h1 style={{ backgroundColor: 'gray' }}>OFF</h1>
                )}
            </div>
            {/* <h1>{light}</h1> */}
            <button
                onClick={() => {
                    setLight(light === 'ON' ? 'OFF' : 'ON');
                }}
            >
                {light === 'ON' ? '라이트 끄기' : '라이트 켜기'}
            </button>
        </>
    );
};

export default Bulb;
