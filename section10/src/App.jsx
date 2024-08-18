import { useState, useRef, useReducer, useCallback } from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import Editor from './components/Editor';
import Exam from './components/Exam';

const mockData = [
    {
        id: 0,
        isDone: false,
        content: 'React 공부하기',
        date: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: '빨래하기',
        date: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: '집 청소하기',
        date: new Date().getTime(),
    },
];

function reducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return [action.data, ...state];
        case 'UPDATE':
            return state.map((item) =>
                item.id === action.targetId
                    ? { ...item, isDone: !item.isDone }
                    : item
            );
        case 'DELETE':
            return state.filter((item) => item.id !== action.targetId);
        default:
            return state;
    }
}

function App() {
    //const [todos, setTodos] = useState(mockData); // -> useReducer로 변환
    const [todos, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    const onCreate = useCallback((content) => {
        dispatch({
            type: 'CREATE',
            data: {
                id: idRef.current++,
                isDone: false,
                content: content,
                date: new Date().getTime(),
            },
        });

        /* useState일때 썻던 것
        const newTodo = {
            id: idRef.current++,
            isDone: false,
            content: content,
            date: new Date().getTime(),
        };
        setTodos([newTodo, ...todos]);
        */
    }, []);

    const onUpdate = useCallback((targetId) => {
        dispatch({
            type: 'UPDATE',
            targetId: targetId,
        });
        /* useState일때 썻던거
        // todos State의 값들 중에
        // targetId와 일치하는 id를 갖는 todo 아이템의 isDone을 toggle
        // 그리고 새로운 배열을 만들어서 todos State를 업데이트
        const newTodos = todos.map((todo) =>
            todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
        );
        setTodos(newTodos);
        */
    }, []);

    /*
    const onDelete = (targetId) => {
        dispatch({
            type: 'DELETE',
            targetId: targetId,
        });
        // setTodos(todos.filter((todo) => todo.id !== targetId));
    };
    */

    const onDelete = useCallback((targetId) => {
        dispatch({
            type: 'DELETE',
            targetId: targetId,
        });
        // setTodos(todos.filter((todo) => todo.id !== targetId));
    }, [])

    return (
        <div className="App">
            {/* <Exam /> */}
            <Header />
            <Editor onCreate={onCreate} />
            <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
        </div>
    );
}

export default App;
