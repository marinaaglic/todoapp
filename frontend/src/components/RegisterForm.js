import { useState } from "react";
import classes from './RegisterForm.module.css';

function RegisterForm(props) {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        props.onRegisterUser({ email: email, username: username, password: password });
        setEmail('');
        setUsername('');
        setPassword('');
    }

    return (
        <>
            <form className={classes.form} onSubmit={submitHandler}>
                <div>
                    <label htmlFor='username'>E-mail</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        required
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
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
                    <button type="submit">Register</button>
                </p>

            </form>
        </>
    )
}

export default RegisterForm;