import React, { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const chatboxRef = useRef(null);
  const chatInputRef = useRef(null);

  useEffect(() => {
    chatboxRef.current.scrollTo(0, chatboxRef.current.scrollHeight);
  }, [chatHistory]);

  const createChatLi = (message, className) => {
    const chatLi = document.createElement('li');
    chatLi.classList.add('chat', className);
    let chatContent =
      className === 'outgoing' ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector('p').textContent = message;
    return chatLi;
  };

  const generateResponse = async (message) => {
    const API_URL = 'https://api.openai.com/v1/chat/completions';

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
      }),
    };

    try {
      const response = await fetch(API_URL, requestOptions);
      const data = await response.json();
      return data.choices[0].message.content.trim();
    } catch (error) {
      console.error(error);
      return 'Oops! Something went wrong. Please try again.';
    }
  };

  const handleChat = async () => {
    const message = userMessage.trim();
    if (!message) return;

    setUserMessage('');
    chatInputRef.current.style.height = `${inputInitHeight}px`;

    const outgoingChatLi = createChatLi(message, 'outgoing');
    setChatHistory((prevChatHistory) => [...prevChatHistory, outgoingChatLi]);

    setTimeout(async () => {
      const incomingChatLi = createChatLi('Thinking...', 'incoming');
      setChatHistory((prevChatHistory) => [...prevChatHistory, incomingChatLi]);

      const response = await generateResponse(message);
      incomingChatLi.querySelector('p').textContent = response;

      chatboxRef.current.scrollTo(0, chatboxRef.current.scrollHeight);
    }, 600);
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    chatInputRef.current.style.height = `${inputInitHeight}px`;
    chatInputRef.current.style.height = `${chatInputRef.current.scrollHeight}px`;
    setUserMessage(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey && window.innerWidth > 800) {
      e.preventDefault();
      handleChat();
    }
  };

  return (
    <div>
      <button className="chatbot-toggler" onClick={() => document.body.classList.toggle('show-chatbot')}>
        Toggle Chatbot
      </button>
      <div className="chatbox" ref={chatboxRef}>
        <ul>
          {chatHistory.map((chatItem, index) => (
            <li key={index} className={`chat ${chatItem.className}`}>
              {chatItem.content}
            </li>
          ))}
        </ul>
      </div>
      <div className="chat-input">
        <textarea
          value={userMessage}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          ref={chatInputRef}
        ></textarea>
        <span className="send-chat-btn" onClick={handleChat}>
          Send
        </span>
      </div>
    </div>
  );
};

export default Chatbot;
