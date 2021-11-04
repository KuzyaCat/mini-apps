import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';

import './chat-page.css';

export function ChatPage() {
  const [messages, setMessages] = useState([
    {
      name: 'Cole',
      image: '...',
      message: 'Hello',
    },
    {
      name: 'Alan Cole',
      image: '...',
      message: 'Hows it going?',
    },
    {
      message: 'Hello',
    },
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([
      ...messages,
      {
        message: input,
      },
    ]);
    setInput('')
  };

  return (
    <div className='chatScreen'>
      <p className='chatScreen__timestamp'>
        YOU MATCHED WITH VLADISLAV ON 15/05/2021
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className='chatScreen__message'>
            <Avatar
              className='chatScreen__icon'
              alt={message.name}
              src={message.image}
            />
            <p className='chatScreen__text'>{message.message}</p>
          </div>
        ) : (
          <div className='chatScreen__message'>
            <p className='chatScreen__textUser'>{message.message}</p>
          </div>
        )
      )}
      <form className='chatScreen__input'>
        <input
          type='text'
          placeholder='Type a message'
          className='chatScreen__inputField'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className='chatScreen__inputButton' onClick={handleSend}>
          SEND
        </button>
      </form>
    </div>
  );
}

