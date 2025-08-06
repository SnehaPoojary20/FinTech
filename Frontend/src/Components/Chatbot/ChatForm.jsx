import React, { useRef } from 'react';
import "./Chatbot.css";
import { useChat } from './ChatContext.jsx';

const ChatForm = () => {
    const inputRef = useRef(null);
    const { setChatHistory } = useChat();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if (!userMessage) return;
        inputRef.current.value = "";

        setChatHistory(history => [...history, { role: 'user', text: userMessage }]);
    };

    return (
        <div>
            <form className='chat-form' onSubmit={handleFormSubmit}>
                <input ref={inputRef} type='text' placeholder='Message..' className='message-input' />
                <button type="submit" className='material-symbols-rounded'>arrow_upward</button>
            </form>
        </div>
    );
};

export default ChatForm;