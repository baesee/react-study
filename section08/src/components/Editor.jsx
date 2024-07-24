import { useState, useRef } from 'react';
import './Editor.css';

const Editor = ({ onCreate }) => {
    const [content, setContent] = useState('');
    const inputRef = useRef(null);

    const onChangeContnet = (e) => {
        setContent(e.target.value);
    };

    const onSubmit = () => {
        if (content === '') {
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent('');
    };

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSubmit();
        }
    };
    return (
        <div className="editor">
            <input
                ref={inputRef}
                placeholder="새로운 TODO"
                value={content}
                onChange={onChangeContnet}
                onKeyDown={onKeyDown}
            />
            <button onClick={onSubmit}>추가</button>
        </div>
    );
};
export default Editor;
