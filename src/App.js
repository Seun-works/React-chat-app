import './App.css';

import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm';
import React from 'react'

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm/>

    return (
        <ChatEngine
            height = "100vh"
            projectID = "3f7fcb4b-66c2-44a0-ac69-39318f9370b0"
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} /> }
        />
    );
}

export default App;

