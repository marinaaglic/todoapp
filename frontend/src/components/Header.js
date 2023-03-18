import classes from './Header.module.css';

function Header({ onCreateTodo }) {

    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>To Do List</h1>
            <p>
                <button className={classes.button} onClick={onCreateTodo}>New To Do</button>
            </p>
        </header>
    )
}

export default Header;