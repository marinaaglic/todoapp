import { useState } from "react";
import classes from './LoginForm.module.css';

function LoginForm(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLoginUser({ username: username, password: password });
        setUsername('');
        setPassword('');
    }

    return (
        <>
            <form className={classes.form} onSubmit={submitHandler}>
                <div>
                    <label htmlFor='username'>Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        required
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <textarea
                        type="password"
                        id="password"
                        value={password}
                        required
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <p className={classes.actions}>
                    <button type="submit">Login</button>
                </p>

            </form>
        </>
    )
}

export default LoginForm;