import MessageFrom from './MessageFrom';
import MyMessage from './MyMessage';
import React from 'react'
import TheirMessage from './TheirMessage';

const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];

    const renderMessages = () => {
        const keys = Object.keys(messages);

        console.log(keys);
    }

    renderMessages();
    return (
        <div>
            ChatFeed
        </div>
    )
}

export default ChatFeed;
