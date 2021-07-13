import React from 'react';

import * as classes from './components/ChatInput/ChatInput.module.scss';

import ChatInput from './components/ChatInput/ChatInput';
import IconTabs from './components/IconTabs/IconTabs';

const App = () => {
  return (
    <div className={classes.chatInputPage}>
      <ChatInput />
      <IconTabs />
    </div>
  );
};

export default App;
