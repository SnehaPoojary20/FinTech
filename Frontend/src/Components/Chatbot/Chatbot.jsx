import axios from "axios";
import React, { useState } from 'react'
import "./Chatbot.css";

const Chatbot = () => {
    const[query,setQuery]=useState('');
    const[response,setResponse]=useState(null);
    const[loading,setLoading]=useState(false);

    const handleQuery = async () => {
    setLoading(true);

    try {
      const res = await axios.post(
        'https://studio.lyzr.ai/api/v1/agent/finance-genie/ask',
        {
          input: query
        },
        {
          headers: {
            Authorization: 'Bearer sk-default-avMn4GjSWbU0uTLjutI77PUqtZta28TD',
            'Content-Type': 'application/json'
          }
        }
      );

      setResponse(res.data.output);
    } catch (error) {
      console.error('Error:', error);
      setResponse({ error: 'Something went wrong!' });
    }

    setLoading(false);
  };

  return (
    <div className="chatbot">
      <h1> Finance Genie</h1>
       <input
        type="text"
        placeholder="e.g., How much am I saving monthly?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="input-box"
      />
       <button
        onClick={handleQuery}
        className="button"
        disabled={loading}
      >
        {loading ? 'Thinking...' : 'Ask Genie'}
      </button>
    </div>
  )
}

export default Chatbot
