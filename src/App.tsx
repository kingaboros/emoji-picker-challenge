import React, { useState } from 'react';

import * as classes from './components/ChatInput/ChatInput.module.scss';

import ChatInput from './components/ChatInput/ChatInput';
import IconsTab from './components/IconTabs/IconsTab';
import EmojiList from './components/EmojisList/EmojiList';

const App = () => {
  const [emojisShown, setEmojisShown] = useState(false);

  const showEmojiHandler = () => {
    setEmojisShown(true);
  };

  return (
    <div className={classes.chatInputPage}>
      {emojisShown && <EmojiList />}
      <ChatInput onShowEmojis={showEmojiHandler} />
    </div>
  );
};

export default App;
