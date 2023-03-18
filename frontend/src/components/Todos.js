import { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import TodoService from '../services/TodoService';
import DoneTodos from './DoneTodos';

function Todos({ onHide, onShow }) {
    const [todosInput, setTodosInput] = useState([]);

    useEffect(() => {
        TodoService.getTodos().then(data => {
            setTodosInput(data);
        })
    }, []);

    const addTodoHandler = (todo) => {
        TodoService
            .postTodo(todo).then(data => {
                const { message } = data;
                if (!message) {
                    TodoService.getTodos().then(data => {
                        setTodosInput(data);
                        onHide();
                    });
                }
            })
    }

    const doneTodoHandler = (id) => {
        const todo = todosInput.find(todo => todo.id === id);
        const newTodo = {
            ...todo,
            done: !todo.done
        }
        TodoService.updateTodo(id, newTodo).then((response) => {
            setTodosInput(todosInput.map(todo => todo.id !== id ? todo : response.data));
        })
    }

    const removeTodoHandler = (id) => {
        TodoService
            .deleteTodo(id)
            .then(response => {
                setTodosInput(todosInput.filter(todo => todo.id !== id));
            })
    }

    return (
        <>
            {onShow && (
                <TodoForm onAddTodo={addTodoHandler}
                    onCancel={onHide} />
            )}
            <section>
                <TodoItem
                    todos={todosInput}
                    onDoneTodo={doneTodoHandler}
                />
            </section>
            <section>
                <DoneTodos todos={todosInput}
                    onRemoveTodo={removeTodoHandler}
                    onDoneTodo={doneTodoHandler} />
            </section>
        </>

    )
}

export default Todos;