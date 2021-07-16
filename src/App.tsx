import React, { useState } from 'react';

import * as classes from './components/ChatInput/ChatInput.module.scss';

import ChatInput from './components/ChatInput/ChatInput';
import Tabs from './components/Tabs/Tabs';

const App = () => {
  const [emojisShown, setEmojisShown] = useState(false);

  const showEmojiHandler = () => {
    setEmojisShown(true);
  };

  const hideEmojiHandler = () => {
    setEmojisShown(false);
  };

  return (
    <div className={classes.chatInputPage}>
      {emojisShown && <Tabs />}
      <ChatInput onShowEmojis={showEmojiHandler} />
    </div>
  );
};

export default App;
