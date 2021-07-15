import React, { useState, Fragment } from 'react';

import * as classes from './components/ChatInput/ChatInput.module.scss';

import ChatInput from './components/ChatInput/ChatInput';
import IconsTab from './components/IconTabs/IconsTab';

const App = () => {
  const [emojisShown, setEmojisShown] = useState(false);

  const showEmojiHandler = () => {
    setEmojisShown(true);
  };

  const hideEmojiHandler = () => {
    setEmojisShown(false);
  };

  return (
    <Fragment>
      <div className={classes.chatInputPage}>
        {emojisShown && <IconsTab />}
        <ChatInput onShowEmojis={showEmojiHandler} />
      </div>
    </Fragment>
  );
};

export default App;
