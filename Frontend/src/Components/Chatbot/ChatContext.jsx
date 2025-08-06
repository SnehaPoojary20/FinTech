import { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [chatHistory, setChatHistory] = useState([]);

    const generateBotResponse=(history)=>{
        //formating chat history for API Request
        history=history.map(({role,text})=>({role,parts:[{text}]}));

        const requestOptions={
           method:"POST",
           header :{ "Content-type":"application/json"},
           body:JSON.stringify({contents:})
        }

        try{
        const response= await fetch(import.meta.env.VITE_API_URL,requestOptions);
        const data=await response.json();
        
        }catch(error){

        }
    }

    return (
        <ChatContext.Provider value={{ chatHistory, setChatHistory }}>
            {children}
        </ChatContext.Provider>
    );
};

export const useChat = () => useContext(ChatContext);