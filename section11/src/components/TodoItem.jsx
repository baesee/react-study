import './TodoItem.css';
import { memo, useContext } from 'react';
import { TodoDispatchContext } from '../App';

// const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
const TodoItem = ({ id, isDone, content, date }) => {
    const { onUpdate, onDelete } = useContext(TodoDispatchContext);
    const onChangeCheckbox = () => {
        onUpdate(id);
    };
    const onClickDeleteButton = () => {
        onDelete(id);
    };
    return (
        <div className="todoItem">
            <input
                onChange={onChangeCheckbox}
                checked={isDone}
                type="checkbox"
            />
            <div className="content">{content}</div>
            <div className="date"> {new Date(date).toLocaleString()}</div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    );
};

export default memo(TodoItem);
// 고차 컴포넌트 (HOC) : 
// export default memo(TodoItem, (prevProps, nextProps) => {
//     // 메모가 스스로 Props(id, isDone, content, date, onUpdate, onDelete ...) 가 바뀌는지
//     // 스스로 판단하지 않고. 콜백함수내에 정의 된 것으로 판단을 하게 된다
//     // true -> 프롭스가 바뀌지 않음.  리렌더링 X
//     // false -> 프롭스가 바뀌었다고 판단함. 리렌더링 O

//     return prevProps.id === nextProps.id &&
//         prevProps.isDone === nextProps.isDone &&
//         prevProps.content === nextProps.content &&
//         prevProps.date === nextProps.date;
// });
