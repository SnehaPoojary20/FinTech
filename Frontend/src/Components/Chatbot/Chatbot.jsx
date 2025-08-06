import React from 'react';
import "./Chatbot.css";
import ChatForm from './ChatForm.jsx';
import { useChat } from './ChatContext.jsx';
import ChatMessage from './ChatMessage.jsx';

const Chatbot = () => {
    const { chatHistory } = useChat();

    return (
        <div className='chatbot'>
            <div className='chatbot-popup'>
                <div className='chat-header'>
                    <div className='header-info'>
                        <span className="logo-text">CookSafe AI</span>
                    </div>
                    <button className='material-symbols-rounded'>keyboard_arrow_down</button>
                </div>

                <div className='chat-body'>
                    <div className='message bot-message'>
                        <p className='message-text'>
                            Hey there Finance Enthusiasts <br />
                            How Can I Help You ??
                        </p>
                    </div>

                    {chatHistory.map((chat, index) => (
                        <ChatMessage key={index} role={chat.role} text={chat.text} />
                    ))}
                </div>

                <div className='chat-footer'>
                    <ChatForm />
                </div>
            </div>
        </div>
    );
};

export default Chatbot;








// https://studio.lyzr.ai/api/v1/agent/finance-genie/ask