import classes from './DoneTodos.module.css';
import { FaTrash } from 'react-icons/fa';
import { FaRedo } from 'react-icons/fa';

function DoneTodos(props) {
    return (
        <div className={classes.wrapper}>
            <h2>
                List of Done To Do's:
            </h2>
            <ul className={classes.posts}>
                {props.todos.map(todo => (
                    todo.done === true ? (<li className={classes.post} key={todo.id}>{todo.title} &nbsp;
                        <button onClick={props.onRemoveTodo.bind(this, todo.id)}>
                            <FaTrash className={classes.icons} title="Delete" />
                        </button>
                        <button onClick={props.onDoneTodo.bind(this, todo.id)}>
                            <FaRedo className={classes.icons} title="Undo" />
                        </button>
                    </li>
                    ) : (null)
                )
                )}
            </ul>

        </div>
    )
}

export default DoneTodos;