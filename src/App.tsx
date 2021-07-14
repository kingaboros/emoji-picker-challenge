import React from 'react';

import * as classes from './components/ChatInput/ChatInput.module.scss';

import ChatInput from './components/ChatInput/ChatInput';

import IconsTab from './components/IconTabs/IconsTab';

const App = () => {
  return (
    <div className={classes.chatInputPage}>
      <ChatInput />
      <IconsTab />
    </div>
  );
};

export default App;
