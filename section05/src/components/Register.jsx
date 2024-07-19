// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

import { useState, useRef } from 'react';

const Register = () => {
    /*
    const [name, setName] = useState('이름');
    const [birth, setBirth] = useState('1991-07-01');
    const [country, setCountry] = useState('');
    const [bio, setBio] = useState('');
    */
    // 위 상태관리를 하나의 객체로 상태를 관리하면 더 편리 할것이다.
    const [input, setInput] = useState({
        name: '',
        birth: '',
        country: '',
        bio: '',
    });

    const countRef = useRef(0);
    const inputRef = useRef();

    // 통합 이벤트 핸들러
    const onChange = (e) => {
        countRef.current++;
        console.log('수정 회수 : ', countRef.current);
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = () => {
        if (input.name === '') {
            inputRef.current.focus();
        }
    };

    /*
    // 이름 변경 이벤트
    const onChangeName = (e) => {
        // setName(e.target.value);
        // ...input : '...' 스프레드 연산자 : 이거를 넣어줘야 다른값들이 초기화가 되지 않고 남아있을 수 있다
        setInput({ ...input, name: e.target.value });
    };
    // 생년월일 변경 이벤트
    const onChangeBirth = (e) => {
        // setBirth(e.target.value);
        setInput({ ...input, birth: e.target.value });
    };

    // 국적 변경
    const onChangeCountry = (e) => {
        // setCountry(e.target.value);
        setInput({ ...input, country: e.target.value });
    };

    // 소개 변경
    const onChangeBio = (e) => {
        // setBio(e.target.value);
        setInput({ ...input, bio: e.target.value });
    };
    */

    return (
        <div>
            <div>
                <button
                    onClick={() => {
                        refObj.current++;
                        console.log(refObj.current);
                    }}
                >
                    증가
                </button>
            </div>
            <form
                style={{
                    maxWidth: '500px',
                    margin: '0 auto',
                    padding: '20px',
                    border: '1px solid #ccc',
                    borderRadius: '10px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                }}
            >
                <div
                    style={{
                        marginBottom: '15px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <label
                        htmlFor="name"
                        style={{
                            display: 'block',
                            marginBottom: '5px',
                            fontWeight: 'bold',
                            flex: '1',
                        }}
                    >
                        이름:
                    </label>
                    <input
                        ref={inputRef}
                        //onChange={onChangeName}
                        onChange={onChange}
                        value={input.name}
                        type="text"
                        id="name"
                        name="name"
                        placeholder="이름을 입력하세요"
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            flex: '2',
                        }}
                    />
                    <div style={{ marginTop: '5px', color: '#555' }}>
                        {input.name}
                    </div>
                </div>
                <div
                    style={{
                        marginBottom: '15px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <label
                        htmlFor="birth"
                        style={{
                            display: 'block',
                            marginBottom: '5px',
                            fontWeight: 'bold',
                            flex: '1',
                        }}
                    >
                        생년월일:
                    </label>
                    <input
                        type="date"
                        id="birth"
                        name="birth"
                        value={input.birth}
                        // onChange={onChangeBirth}
                        onChange={onChange}
                        placeholder="생년월일을 입력하세요"
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            flex: '2',
                        }}
                    />
                    <div style={{ marginTop: '5px', color: '#555' }}>
                        {input.birth}
                    </div>
                </div>
                <div
                    style={{
                        marginBottom: '15px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <label
                        htmlFor="nationality"
                        style={{
                            display: 'block',
                            marginBottom: '5px',
                            fontWeight: 'bold',
                            flex: '1',
                        }}
                    >
                        국적:
                    </label>
                    <select
                        value={input.country}
                        // onChange={onChangeCountry}
                        onChange={onChange}
                        id="country"
                        name="country"
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            flex: '2',
                        }}
                    >
                        <option value="한국kr">한국</option>
                        <option value="일본jp">일본</option>
                        <option value="중국cn">중국</option>
                        <option value="미국us">미국</option>
                    </select>
                    <div style={{ marginTop: '5px', color: '#555' }}>
                        {input.country}
                    </div>
                </div>
                <div
                    style={{
                        marginBottom: '15px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <label
                        htmlFor="bio"
                        style={{
                            display: 'block',
                            marginBottom: '5px',
                            fontWeight: 'bold',
                            flex: '1',
                        }}
                    >
                        자기소개:
                    </label>
                    <textarea
                        id="bio"
                        name="bio"
                        value={input.bio}
                        // onChange={onChangeBio}
                        onChange={onChange}
                        placeholder="자기소개를 입력하세요"
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            minHeight: '100px',
                            flex: '2',
                        }}
                    ></textarea>
                    <div style={{ marginTop: '5px', color: '#555' }}>
                        {input.bio}
                    </div>
                </div>
            </form>
            <button
                onClick={onSubmit}
                style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    backgroundColor: '#4285F4',
                    color: '#fff',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                }}
            >
                제출
            </button>
        </div>
    );
};

export default Register;
