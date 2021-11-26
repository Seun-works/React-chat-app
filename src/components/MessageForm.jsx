import React, {useState} from 'react'
import { isTyping, sendMessage } from 'react-chat-engine';

const MessageForm = (props) => {
    const [inputValue, setInputValue] = useState('');
    const { chatId, creds} = props;


    const submitHandler = (event) => {
        event.preventDefault();
        const text = inputValue.trim();
        if(text.length > 0) 
        sendMessage(creds, chatId, { text})
    };

    const changeHandler = (event) => {
        setInputValue(event.target.value);

        isTyping(props, chatId)
    };



    return (
        <form className = "message-form" onSubmit = {submitHandler}>
            <input 
            className = "message-input"
            placeholder = "Type a message here ..."
            value = {inputValue}
            onChange = {changeHandler}
            onSubmit = {submitHandler}  />

        </form>
    )
}

export default MessageForm;
