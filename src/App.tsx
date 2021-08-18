import React, { useState } from 'react';

import * as classes from './components/ChatInput/ChatInput.module.scss';

import ChatInput from './components/ChatInput/ChatInput';
import Modal from './components/IconTabs/Modal';

const App = () => {
  const [emojisShown, setEmojisShown] = useState(false);
  const [emoji, setEmoji] = useState([]);

  const showEmojiHandler = () => {
    setEmojisShown(true);
  };

  const emojiPick = (e: any) => {
    let chosenEmoji = emoji + e.target.innerHTML;
    setEmoji(chosenEmoji);
    console.log(chosenEmoji);
  };

  return (
    <div className={classes.chatInputPage}>
      {emojisShown && <Modal />}
      <ChatInput onShowEmojis={showEmojiHandler} />
    </div>
  );
};

export default App;
