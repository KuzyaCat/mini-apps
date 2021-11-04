import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Chat } from '../../components/chat';
import { getChatsSelector } from '../../redux/chats/chats.selector';
import { chatsActions } from '../../redux/chats/chats.slice';
import './chats.css';

export function Chats() {
  const dispatch = useDispatch();
  const chats = useSelector(getChatsSelector);

  useEffect(() => {
    dispatch(chatsActions.fetchChats());
  }, [dispatch]);

  return (
    <div className='chats'>
      {chats?.length
        ? chats.map((chat) => (
          <Chat
            key={chat.id}
            name={chat.opponent?.name || 'Cole'}
            message='Hello'
            timestamp='3 days ago'
            profilePic={chat.opponent?.image || '...'}
          />
        ))
        : (
          <>
            <Chat
              name='Cole'
              message='Hello'
              timestamp='3 days ago'
              profilePic='...'
            />
            <Chat
              name='Mace'
              message='Hello'
              timestamp='3 days ago'
              profilePic='...'
            />
            <Chat
              name='Hunter'
              message='Hello'
              timestamp='3 days ago'
              profilePic='...'
            />
            <Chat
              name='Ryder'
              message='Hello'
              timestamp='3 days ago'
              profilePic='...'
            />
          </>
        )
      }
    </div>
  );
}

