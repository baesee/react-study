import './List.css';
import TodoItem from './TodoItem';
import { useState, useContext } from 'react';
import { TodoStateContext } from '../App';

// const List = ({ todos, onUpdate, onDelete }) => {
const List = () => {
    const [search, setSearch] = useState('');
    const todos = useContext(TodoStateContext);
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getFilteredDate = () => {
        if (search === '') {
            return todos;
        }
        return todos.filter((todo) =>
            todo.content.toLowerCase().includes(search.toLowerCase())
        );
    };

    const filteredTodos = getFilteredDate();

    return (
        <div className="list">
            <h4>Todo List 🌱</h4>
            <input
                value={search}
                onChange={onChangeSearch}
                placeholder="검색어를 입력하시라"
            />

            <div className="todos_wrapper">
                {filteredTodos.map((todo) => {
                    return (
                        <TodoItem
                            key={todo.id}
                            {...todo}
                        // onUpdate={onUpdate}
                        // onDelete={onDelete}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default List;
