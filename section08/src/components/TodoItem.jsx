import './TodoItem.css';

const TodoItem = () => {
    return (
        <div className="todoItem">
            <input type="checkbox" />
            <div className="content"> todo</div>
            <div className="date"> date</div>
            <button>삭제</button>
        </div>
    );
};

export default TodoItem;
