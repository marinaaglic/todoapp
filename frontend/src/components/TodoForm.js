import { useState } from 'react';
import classes from './TodoForm.module.css';

function TodoForm(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        props.onAddTodo({ title: title, description: description });
        setTitle('');
        setDescription('');
    }

    return (
        <section>
            <form onSubmit={submitHandler} className={classes.form}>
                <div>
                    <label htmlFor='title'>Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        required
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='description'>Description</label>
                    <textarea
                        type="text"
                        rows={3}
                        id="description"
                        value={description}
                        required
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </div>
                <p className={classes.actions}>
                    <button type="button" onClick={props.onCancel}>Cancel</button>
                </p>
                <p className={classes.actions}>
                    <button type="submit">Add To Do</button>
                </p>
            </form>
        </section>
    )
}

export default TodoForm;