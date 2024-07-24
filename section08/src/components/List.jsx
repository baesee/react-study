import './List.css';
import TodoItem from './TodoItem';

const List = () => {
    return (
        <div className="list">
            <h4>Todo List 🌱</h4>
            <input placeholder="검색어를 입력하시라" />
            <div className="todos_wrapper">
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        </div>
    );
};

export default List;
