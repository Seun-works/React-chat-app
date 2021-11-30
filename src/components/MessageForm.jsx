import { PictureOutlined, SendOutlined } from '@ant-design/icons';
import React, {useState} from 'react'
import { isTyping, sendMessage } from 'react-chat-engine';

const MessageForm = (props) => {
    const [inputValue, setInputValue] = useState('');
    const { chatId, creds} = props;


    const submitHandler = (event) => {
        event.preventDefault();
        const text = inputValue.trim();
        if(text.length > 0) 
        sendMessage(creds, chatId, { text});

        setInputValue('');


    };

    const changeHandler = (event) => {
        setInputValue(event.target.value);

        isTyping(props, chatId)
    };

    const handlePictureUpload = (event) => {
        sendMessage(creds, chatId, {files: event.target.files, text: ''})
    }



    return (
        <form className = "message-form" onSubmit = {submitHandler}>
            <input 
            className = "message-input"
            placeholder = "Type a message here ..."
            value = {inputValue}
            onChange = {changeHandler}
            onSubmit = {submitHandler}  />
            <label htmlFor="upload-button">
                <span className = "image-button">
                    <PictureOutlined className = "picture-icon"/>
                </span>
            </label>
            <input 
            type = "file"
            multiple = {false}
            id = "upload-button"
            style = {{display: 'none'}}
            onChange = {handlePictureUpload} />
            <button type = "submit" className = "send-button">
                <SendOutlined className = "send-icon" />
            </button>
        </form>
    )
}

export default MessageForm;
