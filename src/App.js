import './App.css';

import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed'
import React from 'react'

const App = () => {
    return (
        <ChatEngine
            height = "100vh"
            projectID = "3f7fcb4b-66c2-44a0-ac69-39318f9370b0"
            userName = "Simplyseun_"
            userSecret = "123123"
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} /> }
        />
    );
}

export default App;

