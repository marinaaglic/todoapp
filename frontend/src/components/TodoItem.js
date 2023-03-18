import classes from './TodoItem.module.css';
import Tooltip from '@mui/material/Tooltip';

function TodoItem(props) {
    return (
        <section>
            <ul className={classes.posts}>
                {props.todos.map(todo => (
                    todo.done === false ? (
                        <Tooltip key={todo.id} target='#target' title="Click on the to do when you're done." arrow>
                            <li className={classes.post} key={todo.id}
                                onClick={props.onDoneTodo.bind(this, todo.id)}>
                                <p className={classes.title}>{todo.title}</p>
                                <p className={classes.description}>{todo.description}</p>
                            </li>
                        </Tooltip>
                    ) : (null)
                ))}
            </ul>
        </section>
    );
}

export default TodoItem;