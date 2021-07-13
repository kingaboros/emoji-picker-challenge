import React from 'react';

import * as classes from './components/ChatInput/ChatInput.module.scss';

import ChatInput from './components/ChatInput/ChatInput';

const App = () => {
  return (
    <div className={classes.chatInputPage}>
      <ChatInput />
    </div>
  );
};

export default App;
