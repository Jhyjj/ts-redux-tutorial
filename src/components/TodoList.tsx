import React from 'react';
import { Todo } from '../modules/todos';
import TodoItem from './TodoItem';

//props 타입지정
type TodoListProps = {
    todos: Todo[];
    onToggle:(id:number)=>void;
    onRemove:(id:number)=>void;
}
const TodoList = ({todos, onToggle, onRemove}:TodoListProps) => {
    if(todos.length === 0) return <div>등록한 항목이 없습니다.</div>
    return (
        <ul>
            {todos.map(todo=>(
                <TodoItem todo={todo} onToggle={onToggle} onRemove={onRemove} key={todo.id}/>
            ))}
        </ul>
    );
};

export default TodoList;