import React, {useState} from 'react'

import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const submitHandler = async(event) => {
        event.preventDefault();

        const authObject = {
            'Project-ID': '3f7fcb4b-66c2-44a0-ac69-39318f9370b0',
            'User-Name': username,
            'User-Secret': password
        }

        try {
            //username / password => chatengine -> give messages
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
        } catch(error) {
            setError('Oops, incorrect credentials.');
        }
    }

    const usernameHandler = (event) => {
        setUsername(event.target.value);
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }

    return (
        <div className ="wrapper">
            <div className = "form">
                <h1 className = "title">Welcome to my chat application</h1>
                <form action="" onSubmit = {submitHandler}>
                    <input
                     type="text"
                     value = {username}
                     onChange = {usernameHandler}
                     className = "input"
                     placeholder = "Username"
                     required />
                    <input 
                    type="password"
                    value = {password}
                    onChange = {passwordHandler}
                    className = "input"
                    placeholder = "Passoword"
                    required/>
                    <div align = "center">
                        <button type = "submit" className = "button">
                            <span>Lets Start a conversation</span>
                        </button>
                    </div>
                    <h2 className = "error"> {error}</h2>
                </form>
            </div>
        </div>
        
    )
}

export default LoginForm
