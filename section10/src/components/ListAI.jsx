import './List.css';
import TodoItem from './TodoItem';
import { useState } from 'react';

const List = ({ todos }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredTodos = todos.filter((todo) =>
        todo.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="list">
            <h4>Todo List 🌱</h4>
            <input
                placeholder="검색어를 입력하시라"
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <div className="todos_wrapper">
                {filteredTodos.map((todo) => {
                    return <TodoItem key={todo.id} {...todo} />;
                })}
            </div>
        </div>
    );
};

export default List;
