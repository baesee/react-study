import { useState } from 'react';

const Count = () => {
    const [count, setCount] = useState(0);
    console.log(count);
    return (
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
    );
};

export default Count;
